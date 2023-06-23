import re
import sys
import json
import requests
from dataclasses import dataclass, asdict

from build import converting_str_to_datetime, serialize_metadata_into_json

def deserialize(filename):
    try:
        with open(filename, mode="r") as f:
            json_reading_record = json.loads(f.read())
    except FileNotFoundError:
        json_reading_record = []
    return json_reading_record

def create_new_book_dict(dict_keys):
    dict_keys = dict_keys.copy()
    dict_values = list(map(lambda x: input(f"{x}?: "), dict_keys))
    return dict(zip(dict_keys, dict_values))

def fetch_book_info(isbn):
    response = requests.get(f"https://api.openbd.jp/v1/get?isbn={isbn}")
    response.raise_for_status()
    return response.json()[0].get("summary", False)


@dataclass
class BookModel:
    author: str
    title: str
    publisher: str
    publish_date: str

    @classmethod
    def get_book_summary(cls, isbn):
        book_info = fetch_book_info(isbn=isbn)
        publish_date = book_info["pubdate"].replace("-", "")
        if book_info: return cls(author=book_info["author"], title=book_info["title"], publisher=book_info["publisher"], publish_date=publish_date)

    @property
    def to_dict(self):
        return asdict(self)
    

def delete_book(isbn):
    deserialized_book_data = deserialize("./src/book_records.json")
    book_data = list(filter(lambda dict_element: isbn!=dict_element["isbn"], deserialized_book_data))
    return serialize_metadata_into_json(book_data, "book_records")


def register_book():
    dict_keys = [["isbn", "tags", "datetime", "summary", "further_note"], ["author", "title", "publisher", "publish_date"]]

    book_info_status = True
    while book_info_status:
        new_book_info = create_new_book_dict(dict_keys=dict_keys[0])
        book_info_model = BookModel.get_book_summary(isbn=new_book_info["isbn"])

        if book_info_model: new_book_info.update(book_info_model.to_dict)
        if book_info_model is None: new_book_info.update(create_new_book_dict(dict_keys=dict_keys[1]))

        check = input(f"the following book info is correct? yes or no\n{new_book_info}")
        if re.search(r"y", check): book_info_status = False

    deserialized_json = deserialize("./src/book_records.json")
    deserialized_json.append(new_book_info)

    false_args = [False] * len(deserialized_json)
    book_records_json_datetimed = list(map(converting_str_to_datetime, deserialized_json, false_args))
    
    sorted_book_records = sorted(book_records_json_datetimed, key=lambda x: x["datetime"], reverse=True)
    str_format_book_records = list(map(converting_str_to_datetime, sorted_book_records))
    serialize_metadata_into_json(str_format_book_records, "book_records")

if __name__ == "__main__":
    try:
        sys.argv[1]
        delete_isbn = input("delete isbn:? ")
        delete_book(isbn=delete_isbn)
    except IndexError:
        register_book()

