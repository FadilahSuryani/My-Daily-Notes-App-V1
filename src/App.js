// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";

const TableList = (props) => {
  const { title, time } = props;

  // Menyiapkan konten berbeda untuk setiap hari
  const dayContents = {
    Senin: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Kuliah",
      "4. Belajar",
      "5. Olahraga Sore",
      "6. Istirahat",
    ],
    Selasa: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Masak Dan Sarapan",
      "4. Kuliah",
      "5. Belajar",
      "6. Istirahat",
    ],
    Rabu: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Kuliah",
      "4. Belajar",
      "5. Istirahat",
      "6. Membaca",
    ],
    Kamis: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Kuliah",
      "4. Belajar",
      "5. Menonton Film",
      "6. Istirahat",
    ],
    Jumat: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Kuliah",
      "4. Belajar",
      "5. Olahraga Sore",
      "6. Istirahat",
    ],
    Sabtu: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Bersihin Kos",
      "4. Quality Time",
      "5. Memasak",
      "6. Belajar",
    ],
    Minggu: [
      "1. Bangun dan Shalat",
      "2. Olahraga Pagi",
      "3. Memasak",
      "4. Belajar",
      "5. Olahraga Sore",
      "6. Istirahat",
    ],
  };

  const dayContent = dayContents[title] || [];

  return (
    <div className="col-sm-3 mb-5">
      <div className="card">
        <p className="card-header bg-black"></p>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          {dayContent.map((content, index) => (
            <p className="card-text" key={index}>
              {content}
            </p>
          ))}
        </div>
        <div className="card-footer text-body-secondary">CreatedAt: {time}</div>
      </div>
    </div>
  );
};

function App() {
  const appName = "My Daily Notes App";
  const kontenTitle = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  const listTime = [
    "06-11-2023 05:00-24:00 WIB",
    "07-11-2023 05:00-24:00 WIB",
    "08-11-2023 05:00-24:00 WIB",
    "09-11-2023 05:00-24:00 WIB",
    "10-11-2023 05:00-24:00 WIB",
    "11-11-2023 05:00-24:00 WIB",
    "12-11-2023 05:00-24:00 WIB",
  ];
  return (
    <div className="App">
      <h1>{appName}</h1>
      {
        <div className="container mt-5">
          <div className="row">
            {kontenTitle.map((title, index) => (
              <TableList key={index} title={title} time={listTime[index]} />
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
