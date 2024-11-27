const myChart=document.getElementById("myChart")
const usersCtx = document.getElementById('usersChart').getContext('2d');
const MetricsChart = document.getElementById('MetricsChart').getContext('2d');


let xValues = ["Youtube","Whatsapp","Facebook","Tiktok","Others"];
let yValues = [55, 49, 44, 24, 15];
let barColors = [
  "#FF0000",
  "#008000",
  "#0000FF",
  "#000000",
  "#A020F0"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Spend Chart"
    }
  }
});

new Chart(usersCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Youtube Growth Chart(Subcribers)',
        data: [50, 75, 60, 90, 100, 120],
        backgroundColor: '#FF0000'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    }
  });




  const xxValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

new Chart("MetricsChart", {
  type: "line",
  data: {
    labels: xxValues,
    datasets: [{
      data: [600,100,1000,1600,1300,1500],
      borderColor: "red",
      fill: false
    },{
      data: [200,580,100,800,200,1200],
      borderColor: "green",
      fill: false
    },{
      data: [10,20,400,1200,550,500],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

function Youtube(){
    new Chart(usersCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Youtube Growth Chart(Subcribers)',
            data: [50, 75, 60, 90, 100, 120],
            backgroundColor: '#FF0000'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true }
          }
        }
      });
}

function Tiktok(){
    new Chart(usersCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Tiktok Growth Chart(Followers)',
            data: [70, 20, 60, 70, 100, 80],
            backgroundColor: '#000000'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true }
          }
        }
      });
}

function Facebook(){
    new Chart(usersCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Facebook Growth Chart(Followers)',
            data: [100, 85, 65, 85, 75, 95],
            backgroundColor: '#0000FF'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true }
          }
        }
      });
}