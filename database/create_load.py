
import random
import string

def generate_random_name(length):
    first_name = ''.join(random.choice(string.ascii_lowercase) for _ in range(length))
    last_name = ''.join(random.choice(string.ascii_lowercase) for _ in range(length))
    return [first_name.capitalize(),last_name.capitalize()]

for i in range(15):
    unique_id = i
    first_name = generate_random_name(7)[0]
    last_name = generate_random_name(8)[1]
    age = random.randint(18, 100)
    gender = random.randint(0, 2)
    price_lower = random.randint(200, 1800)
    price_higher = random.randint(price_lower, 3200)
    friend = random.randint(0, 1)
    quiet = random.randint(0, 1)
    line = f"{unique_id}|{first_name}|{last_name}|{age}|{gender}|{price_lower}|{price_higher}|{friend}|{quiet}"
    print(line)

generate_random_name(10)