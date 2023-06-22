import re
import json
import requests

from build import converting_str_to_datetime, serialize_metadata_into_json

def deserialize(filename):
    with open(filename, mode="r") as f:
        json_reading_record = json.loads(f.read())
    return json_reading_record

def create_new_book_dict(dict_keys):
    dict_keys = dict_keys.copy()
    dict_values = list(map(lambda x: input(f"{x}?: "), dict_keys))
    return dict(zip(dict_keys, dict_values))

if __name__ == "__main__":
    dict_keys = ["author","title", "publisher", "isbn", "tags", "datetime", "summary", "further_note"]

    book_info_status = True
    while book_info_status:
        new_book_info = create_new_book_dict(dict_keys=dict_keys)
        check = input(f"the following book info is correct? yes or no\n{new_book_info}")
        if re.search(r"y", check): book_info_status = False

    deserialized_json = deserialize("./src/book_records_metadata.json")
    deserialized_json.append(new_book_info)

    false_args = [False] * len(deserialized_json)
    book_records_json_datetimed = list(map(converting_str_to_datetime, deserialized_json, false_args))
    print(book_records_json_datetimed)
    
    sorted_book_records = sorted(book_records_json_datetimed, key=lambda x: x["datetime"], reverse=True)
    str_format_book_records = list(map(converting_str_to_datetime, sorted_book_records))
    serialize_metadata_into_json(str_format_book_records, "book_records_metadata")

