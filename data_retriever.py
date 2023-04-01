import requests
from bs4 import BeautifulSoup
import json

ALL_LIST = []
Names = []
Ages = []
Nationalities = []
Positions = []
Matches = []
Goals = []
Assists = []

duplicated_names = [] # list of duplicated players' name indexes

url = "https://fbref.com/en/comps/Big5/stats/players/Big-5-European-Leagues-Stats"
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

# Player's name
td_elements = soup.find_all("td", {"class": "left", "data-stat": "player"})

n = 0
for td in td_elements:
    a_elements = td.find_all("a")
    for a in a_elements:
        if a.text not in Names:
            Names.append(a.text) # append players name
        elif a.text in Names:
            Names.append(a.text)
            duplicated_names.append(n)
    n += 1

# Player's age
td_elements = soup.find_all("td", {"class": "center", "data-stat": "age"})

for td in td_elements:
    Ages.append(td.text[0:2]) # append players age

# Player's nationality
td_elements = soup.find_all("td", {"class": "left poptip"})

temp_Nationalities = []
for td in td_elements:
    a_elements = td.find_all("a")
    for a in a_elements:
        span_elements = a.find_all("span")
        for span in span_elements:
            temp_Nationalities.append(span.text[-3:])

Nationalities = [temp_Nationalities[i] for i in range(0, len(temp_Nationalities), 2)]
Nationalities.insert(1931,'ENG') # player no.1932 David Ozoh's nationality 'ENG' is not recorded on the website

# Player's position
td_elements = soup.find_all('td', {'class': 'center', 'data-stat': 'position'})

for td in td_elements:
    Positions.append(td.text)

# Player's matches played
td_elements = soup.find_all('td', {'class': ["right group_start", "right iz group_start"], 'data-stat': 'games'})

for td in td_elements:
    Matches.append(td.text)

# Player's goals
td_elements = soup.find_all('td', {'class': ["right group_start", "right iz group_start"], 'data-stat': 'goals'})

for td in td_elements:
    Goals.append(td.text)

# Player's assits
td_elements = soup.find_all('td', {'class': ["right", "right iz"], 'data-stat': 'assists'})

for td in td_elements:
    Assists.append(td.text)

# Assemble the data
ID = 1
for i in range(len(Names)):
    if i not in duplicated_names:
        ALL_LIST.append({'ID': ID,
                         'Name': Names[i], 
                         'Age': int(Ages[i]),
                         'Nationality': Nationalities[i],
                         'Position': Positions[i],
                         'Matches': int(Matches[i]),
                         'Goals': int(Goals[i]),
                         'Assists': int(Assists[i])})
        ID += 1
    elif i in duplicated_names:
        if int(Ages[i]) == ALL_LIST[-1]['Age'] and Nationalities[i] == ALL_LIST[-1]['Nationality']: # duplicated player due to winter transfer
            ALL_LIST[-1]['Matches'] += int(Matches[i])
            ALL_LIST[-1]['Goals'] += int(Goals[i])
            ALL_LIST[-1]['Assists'] += int(Assists[i])
        else: # two different players with the same name
            ALL_LIST.append({
                         'ID': ID,
                         'Name': Names[i], 
                         'Age': int(Ages[i]),
                         'Nationality': Nationalities[i],
                         'Position': Positions[i],
                         'Matches': int(Matches[i]),
                         'Goals': int(Goals[i]),
                         'Assists': int(Assists[i])})
            ID += 1


json_string = json.dumps(ALL_LIST, ensure_ascii = False)
with open("players_data.json", "w") as outfile:
    outfile.write(json_string)
            

        





    

