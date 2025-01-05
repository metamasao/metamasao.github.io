import json
from collections import deque

def to_tags_deque(article_data):
    tags_deque = deque()
    for article in article_data:
        tags_list = article["tags"].split(",")
        for tag in tags_list:
            tags_deque.append(tag)
    return tags_deque

def create_tags_json(tags_set, tags_deque):
    tags_json = deque()
    for tag in tags_set:
        tag_count = tags_deque.count(tag)
        tags_json.append(
            {
                "tag_name": tag,
                "tag_count": tag_count
            }
        )
    
    tags_json = sorted(tags_json, key=lambda x: x.get("tag_count"), reverse=True)
    return tags_json


def create_tags():
    with open("./react-blog/blog_data/metadata.json") as f_metadata, open("./react-blog/blog_data/tags.json", "w") as f_tags:
        content = f_metadata.read()
        article_data = json.loads(content)
        tags_deque = to_tags_deque(article_data=article_data)
        tags_set = set(tags_deque)
        tags_json = create_tags_json(tags_set=tags_set, tags_deque=tags_deque)
        json.dump(tags_json, f_tags)
        