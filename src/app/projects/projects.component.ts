import { Component, OnInit } from '@angular/core';
export class Project{
  title:string;
  skills:string;
  description:string[];
  constructor(_title:string,_skills:string,_description:string[]){
    this.title=_title;
    this.skills=_skills;
    this.description=_description;
  }
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[];
  description:string[];
  constructor() { }

  ngOnInit() {
    this.projects=[];
    this.projects.push(new Project("Distributed File Storage System",
    "Java | Netty | Protobuf | Raft | Redis | MySQL",
    ["Storing files on a distributed cluster infrastructure portraying high availability, fault tolerance and scalability.",
    "Implemented Raft consensus algorithm for leader election to provide client with a single point of entry to the cluster.",
    "Provided dynamic node addition and deletion to the cluster with the help of timers and heartbeats.",
    "Integrated with 5 more clusters (3 nodes each) in a ring with common API for compatible read, write behavior.",
    "Implemented work stealing, design patterns, write replication and multithreading."]));
    this.projects.push(new Project("XYZ Scalable BurgerShop SaaS Web-App",
    "React | GO | NodeJs | Cassandra | Riak| AWS | Microservices | Heroku",
    ["Achieved XYX Scalability i.e horizontal node duplication, Microservices as functional decomposition and data sharding.",
    "Ensured Horizontal scaling by using AWS load balancer along with auto-scaling group and Heroku.",
    "Created RESTful Microservices in GO having separation of concerns with less coupling and high cohesion.",
    "Applied data sharding across Cassandra (Multiple regions EC2 instance) and Riak clusters (Single Region EC2 instance).",
    "Achieved High Availability and Partition Tolerance using Cassandra with Ec2MultiRegionSnitch configuration"]));
    this.projects.push(new Project("Cognitive Nutrition Data Analysis for Diabetics",
    "Android | Java | REST | Firebase | MongoDb | Machine Learning",
    ["Developed an application to provide food recommendation for diabetics based on their blood glucose level.",
    "Used Yummly’s REST API to get a list of food depending on current blood glucose level of the diabetics.",
    "Provided appropriate food recommendations by running our machine learning algorithm over food choices.",
    "Used Firebase for email authentication, deploying our algorithm over cloud and MongoDb Atlas for storing user data"]));
    this.projects.push(new Project("BookMyShow",
    "Spring Boot | Hibernate | Angular | Java | CRUD REST API | MySql | Amazon RDS",
    ["Developed a Web Application for online reservation of movie tickets.",
    "Created a REST API using Spring Boot for performing CRUD operations on MySql database.",
    "Used JPA for data persistence and MySQL connection pooling to improve the response time of system.",
    "Integration with Amazon RDS to easily set up, operate and scale MySql over the cloud."]));
  }

}
