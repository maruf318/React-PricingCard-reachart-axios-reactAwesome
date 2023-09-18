import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarksData = [
    {
      id: 1,
      name: "John Smith",
      math: 85,
      physics: 78,
      chemistry: 90,
    },
    {
      id: 2,
      name: "Emily Johnson",
      math: 78,
      physics: 88,
      chemistry: 82,
    },
    {
      id: 3,
      name: "Michael Brown",
      math: 92,
      physics: 90,
      chemistry: 94,
    },
    {
      id: 4,
      name: "Olivia Davis",
      math: 88,
      physics: 85,
      chemistry: 89,
    },
    {
      id: 5,
      name: "William Wilson",
      math: 76,
      physics: 80,
      chemistry: 75,
    },
    {
      id: 6,
      name: "Sophia Miller",
      math: 95,
      physics: 92,
      chemistry: 97,
    },
    {
      id: 7,
      name: "Daniel Lee",
      math: 70,
      physics: 65,
      chemistry: 72,
    },
    {
      id: 8,
      name: "Ava Taylor",
      math: 89,
      physics: 91,
      chemistry: 88,
    },
    {
      id: 9,
      name: "Mia Martinez",
      math: 93,
      physics: 89,
      chemistry: 94,
    },
    {
      id: 10,
      name: "Ethan Anderson",
      math: 81,
      physics: 84,
      chemistry: 80,
    },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"chemistry"} stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
