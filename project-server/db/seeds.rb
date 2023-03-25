puts "🌱 Seeding..."

Flashcard.delete_all
StudySet.delete_all

set_1 = StudySet.create!(title: "Object Oriented Programming - Ruby")
set_2 = StudySet.create!(title: "Intro to Databases")
set_3 = StudySet.create!(title: "Intro to Active Record Associations")

set_1_questions = Flashcard.create!([
  { title: "What is Object Oriented Programming?", content: "Object-oriented programming (OOP) is a programming paradigm that focuses on the use of objects, which are instances of classes, to represent and manipulate data. " },
  { title: "What are the benefits of OOP?", content: "OOP is all about being able to structure code so that its functionality can be shared throughout the application. This is opposed to procedural programming (PP), in which you build programs in sequential order and call methods when you want shared behavior between pages in the application. In OOP, the emphasis is on creating reusable and modular code by grouping related data and functions into objects. Each object has its own state (data) and behavior (methods), and objects can interact with each other to accomplish tasks. OOP allows for encapsulation, inheritance, and polymorphism, which are powerful tools for managing complex software systems." },
  { title: "What is a class?", content: "In Ruby, a class is a blueprint or a template for creating objects. It defines the attributes and methods that an object of that class will have. When a class is instantiated, an object is created based on that template, and the object will have its own set of values for the attributes defined in the class. The methods defined in the class can be used by the object to perform various actions, and can also be inherited by subclasses if the class is designed to allow for inheritance." },
  { title: "Can you create an undefined variable in Ruby?", content: "No. Unlike JavaScript, Ruby won't let you create a variable without assigning a value. You must explicitly assign a value of nil if you want an 'empty' variable." },
  { title: "What values are Falsy in Ruby?", content: "In Ruby, only nil and false are falsy values. Everything else is truthy, even 0 and empty strings." }
])

set_2_questions = Flashcard.create!([
  { title: "What is SQL?", content: "SQL (Structured Query Language) is a programming language that is designed for managing and manipulating relational databases. It is used to communicate with and manage databases such as MySQL, Oracle, Microsoft SQL Server, and PostgreSQL. SQL provides a standard way to access and manipulate data stored in relational databases. With SQL, you can perform various operations on the data such as inserting, updating, deleting, and retrieving data. You can also use SQL to define and modify the structure of the database, such as creating tables, adding or removing columns, and defining relationships between tables." },
  { title: "How do classes map to tables?", content: "In an ORM like Active Record, classes are typically mapped to tables in a database. Each instance of a class corresponds to a row in the table, and the attributes of the class correspond to the columns in the table. This allows developers to work with the data in the database using a more object-oriented approach." },
  { title: "What are Primary keys?", content: "A primary key is a column or set of columns that uniquely identifies each row in a database table. It is used to enforce data integrity and enable relationships between tables." },
  { title: "What are Foreign keys?", content: "Foreign keys are columns in a database table that refer to the primary key of another table. They establish a relationship between two tables and help maintain referential integrity by ensuring that data in one table corresponds to data in another table." },
  { title: "What is the benefit of using a Foreign key?", content: "Using a foreign key in a database table allows for the creation of relationships between tables, which helps maintain data integrity and consistency. It ensures that data in one table corresponds to data in another table and allows for efficient querying and data manipulation across tables." }
])

set_3_questions = Flashcard.create!([
  { title: "What are associations in ruby?", content: "In Ruby, associations refer to the way objects in different classes relate to each other. Associations define the relationships between objects, allowing for queries and updates across multiple objects. Common association types include belongs_to, has_many, and has_one, which specify the relationship between two objects and how they interact with each other." },
  { title: "What is a 'one to many' association in ruby?", content: "In Ruby, a one-to-many association is a relationship between two classes where one object from one class can be associated with many objects from another class. For example, a User class can have many Post objects, but each Post object can only belong to one User. This is defined using the has_many and belongs_to association macros in Active Record." },
  { title: "What is a 'many to many' association in ruby?", content: "A 'many to many' association in Ruby refers to a relationship between two models where multiple instances of one model can be associated with multiple instances of another model. This is typically achieved using a join table that contains foreign keys from both models." },
  { title: "What is a join model?", content: "A join model in Ruby associations, also known as a join table or a through table, is an intermediary table that is used to establish a many-to-many relationship between two other models. It contains foreign keys that reference the primary keys of the other two models." },
  { title: "What is a foreign key and primary key?", content: "In Active Record, a foreign key is a column in a table that references the primary key column of another table. The primary key is a column in a table that uniquely identifies each row in the table. Active Record uses these keys to create associations between tables, enabling queries and updates across multiple tables." }
])

set_1_questions.each do |question|
  set_1.flashcards << question
end

set_2_questions.each do |question|
  set_2.flashcards << question
end

set_3_questions.each do |question|
  set_3.flashcards << question
end

puts "✅ Done seeding!"
