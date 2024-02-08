import csv
import json
#import yaml
import xml.etree.ElementTree as ET

#read and parse CSV
with open('me.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    csv_data = [row for row in csv_reader]

# Read and parse JSON file
with open('me.json', 'r') as json_file:
    json_data = json.load(json_file)

# Read and parse YAML file
#with open('me.yaml', 'r') as yaml_file:
#    yaml_data = yaml.safe_load(yaml_file)

# Read and parse XML file
xml_tree = ET.parse('me.xml')
xml_root = xml_tree.getroot()
xml_data = []
for people in xml_root.findall('people'):
    people_data = {
        'name': people.find('name').text,
        'age': int(people.find('age').text),
        'hobbies': people.find('hobbies').text
    }
    xml_data.append(people_data)

print("CSV Data:", csv_data)
print("JSON Data:", json_data)
#print("YAML Data:", yaml_data)
print("XML Data:", xml_data)