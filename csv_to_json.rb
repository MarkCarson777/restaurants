require 'csv'
require 'json'

file_path = "./restaurants_info.csv"

data = File.read(File.expand_path File.dirname(__FILE__), file_path)
options = { headers: :first_row, col_sep: ";"}

results = CSV.parse(data, options).map(&:to_h).to_json

File.open("restaurants_info.json", "w") { |f| f.write results }