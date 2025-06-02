const courses = [
  { title: "HTML & CSS Basics", description: "Learn the fundamentals of web development." },
  { title: "JavaScript Essentials", description: "Understand core JavaScript concepts." },
  { title: "React for Beginners", description: "Build dynamic UIs using React.js." },
  { title: "Python Programming", description: "Master Python from beginner to advanced." }
];

const container = document.getElementById("courseContainer");

courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <button onclick="alert('Enrolled in ${course.title}')">Enroll</button>
  `;
  container.appendChild(card);
});
