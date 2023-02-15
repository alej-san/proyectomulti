new Chart(document.getElementById("graphicsChart"), {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: { beginAtZero: true },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
