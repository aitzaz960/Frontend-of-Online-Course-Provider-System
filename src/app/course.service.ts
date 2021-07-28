import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public to_return:any = [];
  public courses = [
    {
      "course_id": 1,
      "course_title": "Full Stack web development with React",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Full Stack",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/full_stack_1.jpg"
    },
    {
      "course_id": 2,
      "course_title": "Full Stack web development with Angular",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Full Stack",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/full_stack_2.jpg"
    },
    {
      "course_id": 3,
      "course_title": "Full Stack web development in German",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "German",
      "level": "Beginner",
      "category": "Full Stack",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/full_stack_3.jpg"
    },
    {
      "course_id": 4,
      "course_title": "Complete guide to full stack development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Full Stack",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/full_stack_4.jpg"
    },
    {
      "course_id": 5,
      "course_title": "Master in Full Stack Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Full Stack",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/full_stack_5.jpg"
    },




    {
      "course_id": 6,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MEAN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mean_stack_1.jpg"
    },
    {
      "course_id": 7,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MEAN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mean_stack_2.jpg"
    },
    {
      "course_id": 8,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MEAN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mean_stack_3.jpg"
    },
    {
      "course_id": 9,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MEAN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mean_stack_4.jpg"
    },
    {
      "course_id": 10,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MEAN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mean_stack_5.jpg"
    },







    {
      "course_id": 11,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MERN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mern_stack_1.jpg"
    },
    {
      "course_id": 12,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MERN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mern_stack_2.jpg"
    },
    {
      "course_id": 13,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MERN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mern_stack_3.jpg"
    },
    {
      "course_id": 14,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MERN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mern_stack_4.jpg"
    },
    {
      "course_id": 15,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "MERN",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/mern_stack_5.jpg"
    },





    {
      "course_id": 16,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Backend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/frontend_development_1.jpg"
    },

    {
      "course_id": 17,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Backend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/frontend_development_2.jpg"
    },

    {
      "course_id": 18,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Backend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/frontend_development_3.jpg"
    },

    {
      "course_id": 19,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Backend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/frontend_development_4.jpg"
    },

    {
      "course_id": 20,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Backend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/frontend_development_5.jpg"
    },




    {
      "course_id": 21,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Frontend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/backend_development_1.jpg"
    },
    {
      "course_id": 22,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Frontend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/backend_development_2.jpg"
    },
    {
      "course_id": 23,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Frontend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/backend_development_3.jpg"
    },
    {
      "course_id": 24,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Frontend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/backend_development_4.jpg"
    },
    {
      "course_id": 25,
      "course_title": "Master in Web Development",
      "course_description": "This course will give you insights about all the technologies related to web development",
      "instructor_name": "David Paul",
      "instructor_description": "David Paul is a world reknowned reseacher in the field of web programming",
      "outline": ["Html", "CSS", "JavaScript"],
      "language": "English",
      "level": "Beginner",
      "category": "Frontend",
      "NoOdLectures": 120,
      "NoOfHours": 50,
      "quizzes": 10,
      "exercises": 10,
      "price": 200,
      "rating": [true, true, true, true, false],
      "studentsEnrolled": 500,
      "pictureURL": "../../assets/images/backend_development_5.jpg"
    }






  ];
  constructor() { }

  getCourses()
  {
    return this.courses;
  }

  getfullstackcourses()
  {
    this.to_return = [];
    console.log("made array empty");
    let index:number = 0;
    while (index < this.courses.length)
    {
      if (this.courses[index].category == "Full Stack")
      {
        console.log("Full stack course exists at index:" + index + " of the array");
        this.to_return.push(this.courses[index]);
      }
      else{
        console.log("Full stack course does not exists at index:" + index + " of the array");
      }
      index += 1;
    }
    return this.to_return;
  }
  
  getmeanstackcourses()
  {
    this.to_return = [];
    let index:number = 0;
    while (index < this.courses.length)
    {
      if (this.courses[index].category == "MEAN")
      {
        this.to_return.push(this.courses[index]);
      }
      index++;
    }
    return this.to_return;
  }

  getmernstackcourses()
  {
    this.to_return = [];
    let index:number = 0;
    while (index < this.courses.length)
    {
      if (this.courses[index].category == "MERN")
      {
        this.to_return.push(this.courses[index]);
      }
      index++;
    }
    return this.to_return;
  }

  getfrontendcourses()
  {
    this.to_return = [];
    let index:number = 0;
    while (index < this.courses.length)
    {
      if (this.courses[index].category == "Frontend")
      {
        this.to_return.push(this.courses[index]);
      }
      index++;
    }
    return this.to_return;
  }

  getbackendcourses()
  {
    this.to_return = [];
    let index:number = 0;
    while (index < this.courses.length)
    {
      if (this.courses[index].category == "Backend")
      {
        this.to_return.push(this.courses[index]);
      }
      index ++;
    }
    return this.to_return;
  }

  getCoursebyID(id: number)
  {
    if (id <= this.courses.length)
    {
      return this.courses[id-1];
    }
    else{
      return null;
    }
  }
}
