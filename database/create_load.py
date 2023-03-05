
import random
import string

def generate_random_name(length):
    first_name = ''.join(random.choice(string.ascii_lowercase) for _ in range(length))
    last_name = ''.join(random.choice(string.ascii_lowercase) for _ in range(length))
    return [first_name.capitalize(),last_name.capitalize()]

universities = [    'Harvard University',    'Massachusetts Institute of Technology (MIT)',    'Stanford University',    'California Institute of Technology (Caltech)',    'University of Cambridge',    'University of Oxford',    'ETH Zurich - Swiss Federal Institute of Technology',    'University of Chicago',    'Princeton University',    'Yale University',    'University of California, Berkeley (UCB)',    'Columbia University',    'University of California, Los Angeles (UCLA)',    'University of Michigan-Ann Arbor',    'University of Pennsylvania',    'Cornell University',    'Duke University',    'University of Toronto',    'University of Wisconsin-Madison',    'University of Tokyo']
uw_madison_majors = [    'Accounting',    'Agricultural Business Management',    'Animal Sciences',    'Applied Mathematics',    'Art',    'Astronomy',    'Biochemistry',    'Biomedical Engineering',    'Chemical Engineering',    'Chemistry',    'Civil Engineering',    'Computer Engineering',    'Computer Science',    'Dance',    'Economics',    'Electrical Engineering',    'Elementary Education',    'English',    'Environmental Sciences',    'Finance',    'Genetics',    'Geography',    'Geology',    'History',    
                     'Industrial and Systems Engineering',    'International Studies',    'Journalism and Mass Communication',    'Kinesiology',    'Linguistics',    'Management and Human Resources',    'Marketing',    'Materials Science and Engineering',    'Mathematics',    'Mechanical Engineering',    'Medical Microbiology and Immunology',    'Music',    'Neurobiology',    'Nursing',    'Nutritional Sciences',    'Philosophy',    'Physics',    'Political Science',    'Psychology',    'Real Estate and Urban Land Economics',    'Sociology',    'Spanish',    'Statistics',    'Theatre and Drama',    'Zoology']
usa_cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington, D.C.']
usa_states = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'TX', 'CA', 'TX', 'CA', 'TX', 'FL', 'TX', 'OH', 'CA', 'NC', 'IN', 'WA', 'CO', 'DC']
usa_cities_states = []
for i in range(len(usa_cities)):
    usa_cities_states.append(usa_cities[i]+", " +usa_states[i] )
print(usa_cities_states)
interests = [    'Reading',    'Writing',    'Hiking',    'Cooking',    'Traveling',    'Photography',    'Playing musical instruments',    'Watching movies',    'Playing sports',    'Gardening',    'Volunteering',    'Learning new languages',    'Painting',    'Yoga',    'Mediation',    'Dancing',    'Singing',    'Sculpting',    'Playing board games',    'Programming',    'Listening to music',    'Collecting stamps',    'Collecting coins',    'Fishing',    'Horseback riding']
 
display_file = []
comparing_file = []

for i in range(15):
    unique_id = i
    first_name = generate_random_name(7)[0]
    last_name = generate_random_name(8)[1]
    school = universities[random.randint(0,len(universities) -1 )];
    major = uw_madison_majors[random.randint(0,len(uw_madison_majors)) -1];
    descriptions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget arcu volutpat, convallis elit vel, venenatis magna. Fusce volutpat quam eu enim tincidunt, in ultricies purus lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi interdum, nulla quis ultrices malesuada, enim justo eleifend neque, nec bibendum sem felis sed quam. ";
    age = random.randint(18, 100)
    gender = random.randint(0, 2)
    city_index = random.randint(0,20);
    usa_cities_states_selected = usa_cities_states[random.randint(0,len(usa_cities_states))];
    price_lower = random.randint(200, 1800)
    price_higher = random.randint(price_lower, 3200)
    friend_p = random.randint(0, 1)
    quiet = random.randint(0, 1)
    interest_user = random.sample(interests, 3)
    interest_user_string =interest_user[0];
    for i in range(1,len(interest_user)):
        interest_user_string +=  "," + interest_user[i]
    email = f"{first_name}123@university.edu"
    display_line = f"{unique_id}|{first_name}|{last_name}|{age}|{major}|{school}|{gender}|{email}|{usa_cities_states_selected}|{interest_user[0]}|{interest_user[1]}|{interest_user[2]}|{descriptions}";
    display_file.append(display_line)
    comparing_line = f"{unique_id}|{usa_cities_states_selected}|{gender}|{interest_user[0]}|{interest_user[1]}|{interest_user[2]}|{friend_p}|{price_lower}|{price_higher}";
    comparing_file.append(comparing_line)



filename_display = 'display.txt'
filename_comparing = 'compare.txt'

with open(filename_display, 'w') as file:
    for inner_list in display_file:
        file.write(''.join(inner_list) + '\n')

with open(filename_comparing, 'w') as file:
    for inner_list in comparing_file:
        file.write(''.join(inner_list) + '\n')