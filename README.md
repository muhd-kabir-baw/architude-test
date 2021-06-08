# architude-test

# MongoDB Cheat Sheet
https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

# React Documentation

https://reactjs.org/docs/hello-world.html

# React-Bootstrap Documentation
 
https://react-bootstrap.github.io/getting-started/introduction/

# Django Documentation

https://docs.djangoproject.com/en/3.2/

# MongoDB Documentation

https://docs.mongodb.com/

# Djongo Documentation

https://www.djongomapper.com/get-started/

# Concessions

1. Unable to attempt challenge (email hosting)
2. Unable to host
3. Unable to style some parts of frontend properly
4. Unable to clear form after sending of data
5. Responsiveness is not at its most effective


# How to Run

1. Open up test_frontend and test_backend in separate terminals in VS-Code (Or any equivalent IDE)
2. In test_frontend, run the command `npm run start`
3. In test_backend, open up `settings.py` in the nested test_backend folder.
4. Under `DATABASES`, change the value of `host` to your own Mongo Cluster link
5. Save the file, then run the commands `python manage.py makemigrations`, followed by `python manage.py migrate`
6. Run the command `python manage.py runserver` to start the server.
7. Open up the frontend at `localhost:3000` 
8. You can use the link `localhost:8000/api/contactforms/` to check whether form values in the frontend have been passed through to the backend
9. You can use Mongo Compass to check if the data has been parsed in. The collection should be named `leads_contactform`