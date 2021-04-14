const employees = [
    {
        employee_id: 100,
        first_name: "Steven",
        last_name: "King",
        email: "steven.king@sqltutorial.org",
        phone_number: "515.123.4567",
        hire_date: "1987-06-17",   
        job_id: 4,
        salary: "24000.00",
        manager_id: null,
        department_id: 9,
        employees_images: [
            {
                epim_id: 27,
                epim_filename: "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 26,
                epim_filename: "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary: false,
                epim_employee_id: 100
            },
            {
                epim_id: 25,
                epim_filename: "lisa.jpeg",
                epim_path: "/uploads/lisa.jpeg",
                epim_primary: false,
                epim_employee_id: 100
            }
        ]
    },
    {
        employee_id: 101,
        first_name: "Neena",
        last_name: "Kochhar",
        email: "neena.kochhar@sqltutorial.org",
        phone_number: "515.123.4568",
        hire_date: "1989-09-21",
        job_id: 5,
        salary: "17000.00",
        manager_id: 100,
        department_id: 9,
        employees_images: []
    },
    {
        employee_id: 102,
        first_name: "Lex",
        last_name: "De Haan",
        email: "lex.de haan@sqltutorial.org",
        phone_number: "515.123.4569",
        hire_date: "1993-01-13",
        job_id: 5,
        salary: "17000.00",
        manager_id: 100,
        department_id: 9,
        employees_images: []
    },
    {
        employee_id: 103,
        first_name: "Alexander",
        last_name: "Hunold",
        email: "alexander.hunold@sqltutorial.org",
        phone_number: "590.423.4567",
        hire_date: "1990-01-03",
        job_id: 9,
        salary: "9000.00",
        manager_id: 102,
        department_id: 6,
        employees_images: []
    },
    {
        employee_id: 104,
        first_name: "Bruce",
        last_name: "Ernst",
        email: "bruce.ernst@sqltutorial.org",
        phone_number: "590.423.4568",
        hire_date: "1991-05-21",
        job_id: 9,
        salary: "6000.00",
        manager_id: 103,
        department_id: 6,
        employees_images: []
    },
    {
        employee_id: 105,
        first_name: "David",
        last_name: "Austin",
        email: "david.austin@sqltutorial.org",
        phone_number: "590.423.4569",
        hire_date: "1997-06-25",
        job_id: 9,
        salary: "4800.00",
        manager_id: 103,
        department_id: 6,
        employees_images: []
    },
    {
        employee_id: 106,
        first_name: "Valli",
        last_name: "Pataballa",
        email: "valli.pataballa@sqltutorial.org",
        phone_number: "590.423.4560",
        hire_date: "1998-02-05",
        job_id: 9,
        salary: "4800.00",
        manager_id: 103,
        department_id: 6,
        employees_images: []
    },
    {
        employee_id: 107,
        first_name: "Diana",
        last_name: "Lorentz",
        email: "diana.lorentz@sqltutorial.org",
        phone_number: "590.423.5567",
        hire_date: "1999-02-07",
        job_id: 9,
        salary: "4200.00",
        manager_id: 103,
        department_id: 6,
        employees_images: []
    },
    {
        employee_id: 108,
        first_name: "Nancy",
        last_name: "Greenberg",
        email: "nancy.greenberg@sqltutorial.org",
        phone_number: "515.124.4569",
        hire_date: "1994-08-17",
        job_id: 7,
        salary: "12000.00",
        manager_id: 101,
        department_id: 10,
        employees_images: []
    },
    {
        employee_id: 109,
        first_name: "Daniel",
        last_name: "Faviet",
        email: "daniel.faviet@sqltutorial.org",
        phone_number: "515.124.4169",
        hire_date: "1994-08-16",
        job_id: 6,
        salary: "9000.00",
        manager_id: 108,
        department_id: 10,
        employees_images: []
    },
    {
        employee_id: 110,
        first_name: "John",
        last_name: "Chen",
        email: "john.chen@sqltutorial.org",
        phone_number: "515.124.4269",
        hire_date: "1997-09-28",
        job_id: 6,
        salary: "8200.00",
        manager_id: 108,
        department_id: 10,
        employees_images: []
    },
    {
        employee_id: 111,
        first_name: "Ismael",
        last_name: "Sciarra",
        email: "ismael.sciarra@sqltutorial.org",
        phone_number: "515.124.4369",
        hire_date: "1997-09-30",
        job_id: 6,
        salary: "7700.00",
        manager_id: 108,
        department_id: 10,
        employees_images: []
    },
    {
        employee_id: 112,
        first_name: "Jose Manuel",
        last_name: "Urman",
        email: "jose manuel.urman@sqltutorial.org",
        phone_number: "515.124.4469",
        hire_date: "1998-03-07",
        job_id: 6,
        salary: "7800.00",
        manager_id: 108,
        department_id: 10,
        employees_images: []
    },
    {
        employee_id: 113,
        first_name: "Luis",
        last_name: "Popp",
        email: "luis.popp@sqltutorial.org",
        phone_number: "515.124.4567",
        hire_date: "1999-12-07",
        job_id: 6,
        salary: "6900.00",
        manager_id: 108,
        department_id: 10,
        employees_images: []
    },
    {
        employee_id: 114,
        first_name: "Den",
        last_name: "Raphaely",
        email: "den.raphaely@sqltutorial.org",
        phone_number: "515.127.4561",
        hire_date: "1994-12-07",
        job_id: 14,
        salary: "11000.00",
        manager_id: 100,
        department_id: 3,
        employees_images: []
    },
    {
        employee_id: 115,
        first_name: "Alexander",
        last_name: "Khoo",
        email: "alexander.khoo@sqltutorial.org",
        phone_number: "515.127.4562",
        hire_date: "1995-05-18",
        job_id: 13,
        salary: "3100.00",
        manager_id: 114,
        department_id: 3,
        employees_images: []
    },
    {
        employee_id: 116,
        first_name: "Shelli",
        last_name: "Baida",
        email: "shelli.baida@sqltutorial.org",
        phone_number: "515.127.4563",
        hire_date: "1997-12-24",
        job_id: 13,
        salary: "2900.00",
        manager_id: 114,
        department_id: 3,
        employees_images: []
    },
    {
        employee_id: 117,
        first_name: "Sigal",
        last_name: "Tobias",
        email: "sigal.tobias@sqltutorial.org",
        phone_number: "515.127.4564",
        hire_date: "1997-07-24",
        job_id: 13,
        salary: "2800.00",
        manager_id: 114,
        department_id: 3,
        employees_images: []
    },
    {
        employee_id: 118,
        first_name: "Guy",
        last_name: "Himuro",
        email: "guy.himuro@sqltutorial.org",
        phone_number: "515.127.4565",
        hire_date: "1998-11-15",
        job_id: 13,
        salary: "2600.00",
        manager_id: 114,
        department_id: 3,
        employees_images: []
    },
    {
        employee_id: 119,
        first_name: "Karen",
        last_name: "Colmenares",
        email: "karen.colmenares@sqltutorial.org",
        phone_number: "515.127.4566",
        hire_date: "1999-08-10",
        job_id: 13,
        salary: "2500.00",
        manager_id: 114,
        department_id: 3,
        employees_images: []
    },
    {
        employee_id: 120,
        first_name: "Matthew",
        last_name: "Weiss",
        email: "matthew.weiss@sqltutorial.org",
        phone_number: "650.123.1234",
        hire_date: "1996-07-18",
        job_id: 19,
        salary: "8000.00",
        manager_id: 100,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 121,
        first_name: "Adam",
        last_name: "Fripp",
        email: "adam.fripp@sqltutorial.org",
        phone_number: "650.123.2234",
        hire_date: "1997-04-10",
        job_id: 19,
        salary: "8200.00",
        manager_id: 100,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 122,
        first_name: "Payam",
        last_name: "Kaufling",
        email: "payam.kaufling@sqltutorial.org",
        phone_number: "650.123.3234",
        hire_date: "1995-05-01",
        job_id: 19,
        salary: "7900.00",
        manager_id: 100,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 123,
        first_name: "Shanta",
        last_name: "Vollman",
        email: "shanta.vollman@sqltutorial.org",
        phone_number: "650.123.4234",
        hire_date: "1997-10-10",
        job_id: 19,
        salary: "6500.00",
        manager_id: 100,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 126,
        first_name: "Irene",
        last_name: "Mikkilineni",
        email: "irene.mikkilineni@sqltutorial.org",
        phone_number: "650.124.1224",
        hire_date: "1998-09-28",
        job_id: 18,
        salary: "2700.00",
        manager_id: 120,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 145,
        first_name: "John",
        last_name: "Russell",
        email: "john.russell@sqltutorial.org",
        phone_number: null,
        hire_date: "1996-10-01",
        job_id: 15,
        salary: "14000.00",
        manager_id: 100,
        department_id: 8,
        employees_images: []
    },
    {
        employee_id: 146,
        first_name: "Karen",
        last_name: "Partners",
        email: "karen.partners@sqltutorial.org",
        phone_number: null,
        hire_date: "1997-01-05",
        job_id: 15,
        salary: "13500.00",
        manager_id: 100,
        department_id: 8,
        employees_images: []
    },
    {
        employee_id: 176,
        first_name: "Jonathon",
        last_name: "Taylor",
        email: "jonathon.taylor@sqltutorial.org",
        phone_number: null,
        hire_date: "1998-03-24",
        job_id: 16,
        salary: "8600.00",
        manager_id: 100,
        department_id: 8,
        employees_images: []
    },
    {
        employee_id: 177,
        first_name: "Jack",
        last_name: "Livingston",
        email: "jack.livingston@sqltutorial.org",
        phone_number: null,
        hire_date: "1998-04-23",
        job_id: 16,
        salary: "8400.00",
        manager_id: 100,
        department_id: 8,
        employees_images: []
    },
    {
        employee_id: 178,
        first_name: "Kimberely",
        last_name: "Grant",
        email: "kimberely.grant@sqltutorial.org",
        phone_number: null,
        hire_date: "1999-05-24",
        job_id: 16,
        salary: "7000.00",
        manager_id: 100,
        department_id: 8,
        employees_images: []
    },
    {
        employee_id: 179,
        first_name: "Charles",
        last_name: "Johnson",
        email: "charles.johnson@sqltutorial.org",
        phone_number: null,
        hire_date: "2000-01-04",
        job_id: 16,
        salary: "6200.00",
        manager_id: 100,
        department_id: 8,
        employees_images: []
    },
    {
        employee_id: 192,
        first_name: "Sarah",
        last_name: "Bell",
        email: "sarah.bell@sqltutorial.org",
        phone_number: "650.501.1876",
        hire_date: "1996-02-04",
        job_id: 17,
        salary: "4000.00",
        manager_id: 123,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 193,
        first_name: "Britney",
        last_name: "Everett",
        email: "britney.everett@sqltutorial.org",
        phone_number: "650.501.2876",
        hire_date: "1997-03-03",
        job_id: 17,
        salary: "3900.00",
        manager_id: 123,
        department_id: 5,
        employees_images: []
    },
    {
        employee_id: 200,
        first_name: "Jennifer",
        last_name: "Whalen",
        email: "jennifer.whalen@sqltutorial.org",
        phone_number: "515.123.4444",
        hire_date: "1987-09-17",
        job_id: 3,
        salary: "4400.00",
        manager_id: 101,
        department_id: 1,
        employees_images: []
    },
    {
        employee_id: 201,
        first_name: "Michael",
        last_name: "Hartstein",
        email: "michael.hartstein@sqltutorial.org",
        phone_number: "515.123.5555",
        hire_date: "1996-02-17",
        job_id: 10,
        salary: "13000.00",
        manager_id: 100,
        department_id: 2,
        employees_images: []
    },
    {
        employee_id: 202,
        first_name: "Pat",
        last_name: "Fay",
        email: "pat.fay@sqltutorial.org",
        phone_number: "603.123.6666",
        hire_date: "1997-08-17",
        job_id: 11,
        salary: "6000.00",
        manager_id: 201,
        department_id: 2,
        employees_images: []
    },
    {
        employee_id: 203,
        first_name: "Susan",
        last_name: "Mavris",
        email: "susan.mavris@sqltutorial.org",
        phone_number: "515.123.7777",
        hire_date: "1994-06-07",
        job_id: 8,
        salary: "6500.00",
        manager_id: 101,
        department_id: 4,
        employees_images: []
    },
    {
        employee_id: 204,
        first_name: "Hermann",
        last_name: "Baer",
        email: "hermann.baer@sqltutorial.org",
        phone_number: "515.123.8888",
        hire_date: "1994-06-07",
        job_id: 12,
        salary: "10000.00",
        manager_id: 101,
        department_id: 7,
        employees_images: []
    },
    {
        employee_id: 205,
        first_name: "Shelley",
        last_name: "Higgins",
        email: "shelley.higgins@sqltutorial.org",
        phone_number: "515.123.8080",
        hire_date: "1994-06-07",
        job_id: 2,
        salary: "12000.00",
        manager_id: 101,
        department_id: 11,
        employees_images: []
    },
    {
        employee_id: 206,
        first_name: "William",
        last_name: "Gietz",
        email: "william.gietz@sqltutorial.org",
        phone_number: "515.123.8181",
        hire_date: "1994-06-07",
        job_id: 1,
        salary: "8300.00",
        manager_id: 205,
        department_id: 11,
        employees_images: []
    }
]

module.exports = employees;