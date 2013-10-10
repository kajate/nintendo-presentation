(function() {
  $(function() {
    return $("#container").highcharts({
      chart: {
        type: "column"
      },
      title: {
        text: "Stacked column chart"
      },
      xAxis: {
        categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
      },
      yAxis: {
        min: 0,
        title: {
          text: "Total fruit consumption"
        }
      },
      legend: {
        align: "right",
        x: -100,
        verticalAlign: "top",
        y: 20,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || "white",
        borderColor: "#CCC",
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        formatter: function() {
          return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + "<br/>" + "Total: " + this.point.stackTotal;
        }
      },
      plotOptions: {
        column: {
          pointPadding: -0.7
        }
      },
      series: [
        {
          name: "John",
          data: [5, 3, 4, 7, 2],
          color: "rgba(69, 114, 167, 0.5)"
        }, {
          name: "Jane",
          data: [2, 2, 3, 2, 1],
          color: "rgba(114, 69, 167, 0.5)"
        }, {
          name: "Joe",
          data: [3, 4, 4, 2, 5],
          color: "rgba(169, 114, 67, 0.5)"
        }
      ]
    });
  });

}).call(this);
