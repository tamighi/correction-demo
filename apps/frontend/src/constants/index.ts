import { ReviewDto, ServiceDto } from "types";

const services: ServiceDto[] = [
  {
    id: 1,
    name: "Correction",
    description:
      "Fusce nec nunc sit amet lorem tincidunt porttitor. Cras a mollis diam, vitae semper urna. Nullam imperdiet mi in mi vulputate, sed laoreet diam tincidunt.\n\nAenean sapien justo, convallis sit amet lacinia vel, imperdiet nec eros. In semper, justo sit amet placerat suscipit, tortor urna porttitor libero, in consequat nunc mi vitae quam. Cras rhoncus urna vitae consequat elementum.\nMaecenas interdum quis quam ac eleifend. Quisque finibus, dolor sit amet cursus egestas, nibh augue lobortis sapien, non pharetra mi nisi nec purus. Donec velit eros, ultricies semper pulvinar vitae, varius eu justo.\nPhasellus eu pellentesque lorem. Maecenas tincidunt nunc eget accumsan viverra. Nulla eget sodales justo, sit amet tincidunt sapien. Donec feugiat, sem pharetra pretium mollis, erat quam lobortis nulla, vitae varius quam urna id orci. Quisque varius ac libero sed bibendum. Curabitur nec nisl neque. ",
    subServices: [
      {
        id: 1,
        textType: "Thesis",
        pricePerCharacter: 0.005,
      },
      {
        id: 2,
        textType: "Article",
        pricePerCharacter: 0.003,
      },
      {
        id: 3,
        textType: "Novel",
        pricePerCharacter: 0.003,
      },
    ],
  },
  {
    id: 2,
    name: "Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo dapibus, ultricies nunc eget, auctor risus. Mauris at elit turpis. Aliquam erat volutpat. Nunc rutrum pulvinar dolor, id aliquet mi lacinia et. Quisque at vulputate risus. Sed ullamcorper tristique ipsum vel bibendum. Duis et pharetra justo. Sed id nisl a risus tristique lobortis. Nulla facilisi. Phasellus eget sagittis elit.\n\nNulla a sagittis dolor. Phasellus sem purus, hendrerit ut tempus eget, commodo et mi. Vestibulum scelerisque, mi et aliquam egestas, arcu nisi semper erat, vel bibendum leo tortor sed dui. Cras ac nisl a tortor luctus aliquam. Nunc efficitur eros eget neque pellentesque dapibus. Nunc sollicitudin mi quis nunc dignissim, eget aliquam est laoreet. Nam varius eleifend justo. ",
    subServices: [
      {
        id: 4,
        textType: "Article",
        pricePerCharacter: 0.003,
      },
      {
        id: 5,
        textType: "Blog Post",
        pricePerCharacter: 0.0025,
      },
      {
        id: 6,
        textType: "Essay",
        pricePerCharacter: 0.004,
      },
    ],
  },
  {
    id: 3,
    name: "Proofreading",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vulputate, nunc in viverra lacinia, mi tellus congue orci, eu tincidunt mi nisl sit amet nisi. Nulla facilisi. Duis suscipit libero vitae risus iaculis, et consectetur enim interdum. Curabitur vulputate felis et turpis efficitur, vel facilisis diam venenatis. Proin interdum enim felis, nec sagittis velit tristique at. Integer vulputate est ut mauris tempus, sit amet facilisis orci congue. Ut tincidunt tortor et mi pulvinar, vel luctus tortor ullamcorper. Morbi interdum faucibus metus. Ut feugiat mollis risus, in tempor odio feugiat ac. ",
    subServices: [
      {
        id: 7,
        textType: "Website",
        pricePerCharacter: 0.004,
      },
      {
        id: 8,
        textType: "Document",
        pricePerCharacter: 0.0035,
      },
      {
        id: 9,
        textType: "Email",
        pricePerCharacter: 0.002,
      },
    ],
  },
];

const reviews: ReviewDto[] = [
  {
    id: 1,
    name: "Jeanne Doe",
    date: new Date(),
    note: 4,
    email: "jeannedoe@gmail.com",
    message:
      "Hello there! I just wanted to say that the service provided by your team was excellent. The attention to detail and the quality of work were outstanding. I'm very satisfied with the final result. Thank you so much!",
  },
  {
    id: 2,
    name: "John Smith",
    date: new Date(),
    note: 5,
    email: "johnsmith@example.com",
    message:
      "I can't express enough how impressed I am with the service I received from your company. The level of professionalism, communication, and expertise exceeded my expectations. The final deliverables were exceptional. I highly recommend your services to anyone in need. Keep up the great work!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    date: new Date("2023-07-12"),
    note: 3,
    email: "emilyjohnson@test.com",
    message:
      "I recently utilized your services for a project, and while the work was decent, there were a few areas that could be improved. The communication and response times could have been better, and there were some minor issues with the deliverables. However, I appreciate your team's effort, and I'm hopeful that these areas will be addressed in the future.",
  },
  // Add more reviews...
  {
    id: 4,
    name: "David Brown",
    date: new Date(),
    note: 4,
    email: "davidbrown@example.com",
    message:
      "I had the pleasure of working with your team, and I must say that I'm extremely impressed with the quality of service provided. The attention to detail, promptness, and professionalism were exceptional. The final result exceeded my expectations. I will definitely be recommending your services to others. Thank you!",
  },
  {
    id: 5,
    name: "Sophia Davis",
    date: new Date("2023-07-10"),
    note: 5,
    email: "sophiadavis@test.com",
    message:
      "I want to express my gratitude for the outstanding service your team provided. The level of commitment, expertise, and attention to detail was remarkable. The project was delivered on time, and the results were beyond my expectations. Your team truly goes above and beyond. I highly recommend your services!",
  },
  {
    id: 6,
    name: "Michael Wilson",
    date: new Date(),
    note: 4,
    email: "michaelwilson@example.com",
    message:
      "I'm writing to thank your team for the professional and reliable service you provided. The attention to detail, timely communication, and overall experience were outstanding. The project was completed with great precision, and I'm very satisfied with the outcome. I will definitely be using your services again in the future!",
  },
  // Add more reviews...
  {
    id: 7,
    name: "Olivia Taylor",
    date: new Date(),
    note: 3,
    email: "oliviataylor@test.com",
    message:
      "While the work you delivered was satisfactory, there were a few areas that could be improved. The communication throughout the project could have been clearer, and there were some minor issues with the final deliverables. However, I appreciate your team's effort and professionalism. I hope to see improvements in the future.",
  },
  {
    id: 8,
    name: "James Anderson",
    date: new Date(),
    note: 5,
    email: "jamesanderson@example.com",
    message:
      "I wanted to take a moment to express my utmost satisfaction with the outstanding service provided by your team. The quality of work, attention to detail, and customer service were exceptional. I have no hesitation in recommending your services to others. You truly exceeded my expectations. Thank you!",
  },
  {
    id: 9,
    name: "Emma Wilson",
    date: new Date("2023-07-11"),
    note: 4,
    email: "emmawilson@test.com",
    message:
      "I'm writing to thank you for the professional service and excellent results. The attention to detail, promptness, and quality of work were impressive. The final deliverables met my requirements, and I'm very pleased with the outcome. I will definitely be recommending your services to colleagues and friends. Keep up the great work!",
  },
  // Add more reviews...
  {
    id: 10,
    name: "Noah White",
    date: new Date(),
    note: 4,
    email: "noahwhite@example.com",
    message:
      "I want to express my appreciation for the reliable service and quick turnaround time provided by your team. The attention to detail and overall experience were exceptional. The project was completed with great efficiency, and I'm very satisfied with the results. I will definitely consider using your services again in the future!",
  },
  {
    id: 11,
    name: "Ava Thompson",
    date: new Date(),
    note: 5,
    email: "avathompson@test.com",
    message:
      "I can't thank your team enough for the exceptional quality and professionalism displayed throughout the project. The attention to detail, expertise, and prompt communication were outstanding. The final results exceeded my expectations, and I'm truly impressed. I highly recommend your services to anyone seeking top-notch quality and reliable service!",
  },
  {
    id: 12,
    name: "William Turner",
    date: new Date(),
    note: 3,
    email: "williamturner@example.com",
    message:
      "I recently used your services and while the work was good, I couldn't help but feel that the pricing could have been more competitive. Nonetheless, I appreciate your team's effort and the quality of work delivered. I hope you take this feedback constructively and consider offering more competitive pricing in the future.",
  },
  // Add more reviews...
  {
    id: 13,
    name: "Mia Anderson",
    date: new Date(),
    note: 4,
    email: "miaanderson@test.com",
    message:
      "I would like to express my sincere appreciation for the highly professional and attentive service provided by your team. The attention to detail, quality of work, and overall experience were exceptional. The project was completed to my utmost satisfaction. I will definitely be recommending your services to others!",
  },
  {
    id: 14,
    name: "Alexander Harris",
    date: new Date(),
    note: 5,
    email: "alexanderharris@example.com",
    message:
      "I want to thank your team for providing top-notch service and great value for money. The level of professionalism, expertise, and attention to detail were remarkable. The project was delivered on time and to my complete satisfaction. I highly recommend your services to anyone seeking exceptional quality and outstanding results!",
  },
  {
    id: 15,
    name: "Ella Wilson",
    date: new Date("2023-07-09"),
    note: 4,
    email: "ellawilson@test.com",
    message:
      "I wanted to express my appreciation for the efficient service provided by your team. The attention to detail, promptness, and quality of work were impressive. The final deliverables met my expectations, and I'm very pleased with the outcome. I will definitely consider using your services again in the future!",
  },
  // Add more reviews...
  {
    id: 16,
    name: "Liam Brown",
    date: new Date(),
    note: 3,
    email: "liambrown@example.com",
    message:
      "I recently utilized your services, and while the work delivered was decent, there were some minor delays during the project. The communication could have been smoother, and the timeline could have been better managed. However, I appreciate your team's effort and the overall quality of work provided.",
  },
  {
    id: 17,
    name: "Grace Davis",
    date: new Date(),
    note: 5,
    email: "gracedavis@test.com",
    message:
      "I want to express my utmost satisfaction with the exceptional quality and professionalism demonstrated by your team. The attention to detail, timely delivery, and overall experience were outstanding. I couldn't be happier with the results. Thank you for providing such excellent service!",
  },
  {
    id: 18,
    name: "Benjamin Taylor",
    date: new Date(),
    note: 4,
    email: "benjamintaylor@example.com",
    message:
      "I'm writing to thank your team for the timely delivery and excellent customer service. The attention to detail, quality of work, and overall experience were remarkable. The project was completed with great precision, and I'm very satisfied with the outcome. I will definitely be recommending your services to others!",
  },
  // Add more reviews...
  {
    id: 19,
    name: "Harper Anderson",
    date: new Date(),
    note: 4,
    email: "harperanderson@test.com",
    message:
      "I want to express my gratitude for the helpful service and great attention to detail provided by your team. The level of professionalism, expertise, and promptness were remarkable. The project was completed to my utmost satisfaction, and I'm very pleased with the outcome. I will definitely be using your services again!",
  },
  {
    id: 20,
    name: "Daniel Martin",
    date: new Date(),
    note: 5,
    email: "danielmartin@example.com",
    message:
      "I want to take a moment to express my highest recommendation for your services. The expertise, attention to detail, and overall professionalism displayed by your team were exceptional. The project was delivered on time, and the results exceeded my expectations. Thank you for providing such outstanding service!",
  },
  {
    id: 21,
    name: "Sofia Thompson",
    date: new Date(),
    note: 3,
    email: "sofiathompson@test.com",
    message:
      "While the work you delivered was satisfactory, I couldn't help but feel that the pricing could have been more competitive. However, I appreciate your team's effort and the quality of work provided. I hope you take this feedback constructively and consider offering more competitive pricing in the future.",
  },
  // Add more reviews...
  {
    id: 22,
    name: "Matthew Davis",
    date: new Date(),
    note: 4,
    email: "matthewdavis@example.com",
    message:
      "I'm writing to express my appreciation for the attention to detail and thoroughness displayed by your team. The level of professionalism, expertise, and promptness were remarkable. The project was completed to my utmost satisfaction, and I couldn't be happier with the results. Thank you for providing such outstanding service!",
  },
];

export { services, reviews };
