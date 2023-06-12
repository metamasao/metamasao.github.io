import os
import markdown
import json
from datetime import datetime

md = markdown.Markdown(extensions=["meta"])

def remove_array(dict_metadata):
	# metadataのkey: valueのvalueが配列になっているため。
	new_value_list = list(map(lambda value: value[0], dict_metadata.values()))
	return dict(zip(dict_metadata.keys(), new_value_list))

def converting_str_to_datetime(dict_metadata, reverse=True):
	converting_func = str if reverse else datetime.fromisoformat
	dict_metadata.update(datetime=converting_func(dict_metadata["datetime"]))
	return dict_metadata

def parse_markdown(filename):
	with open(f"./memo_blog/{filename}") as f:
		md.convert(f.read())
		meta_data = remove_array(md.Meta)
		meta_data = converting_str_to_datetime(meta_data, reverse=False)
	return meta_data

def parse_markdown_files(memo_dir):
	return list(map(parse_markdown, memo_dir))

def serialize_metadata_into_json(metadata):
	with open("./src/metadata.json", mode="w") as f:
		json.dump(metadata, f)
	
if __name__ == "__main__":
	memo_dir = os.listdir("./memo_blog")
	parsed_metadata = parse_markdown_files(memo_dir=memo_dir)
	sorted_metadata = sorted(parsed_metadata, key=lambda dict_element: dict_element["datetime"], reverse=True)

	# datetime型ではjsonにシリアライズできず、再度str型に戻す必要があるため。
	strformat_metadata = list(map(converting_str_to_datetime, sorted_metadata))
	serialize_metadata_into_json(sorted_metadata)
