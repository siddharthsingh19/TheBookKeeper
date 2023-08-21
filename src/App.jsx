import "./App.css";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import Book from "./components/Book";
import { useEffect, useState } from "react";
function App() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios
                .get(
                    "https://www.googleapis.com/books/v1/volumes?q=" +
                        search +
                        "&key=AIzaSyAXjFWjjyWZ2ZiJawBg0oglhwGrq1JDX8o+&maxResults=40"
                )
                .then((res) => setData(res.data.items))
                .catch((err) => console.log(err));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    search +
                    "&key=AIzaSyAXjFWjjyWZ2ZiJawBg0oglhwGrq1JDX8o+&maxResults=40"
            )
            .then((res) => setData(res.data.items))
            .catch((err) => console.log(err));
    };

    const discoverArr = [
        "c",
        "c++",
        "microprocessor",
        "java",
        "microcontroller",
        "javascript",
        "geeta",
        "shiva",
        "friends",
    ];

    useEffect(() => {
        let random = Math.floor(Math.random()*discoverArr.length)
        let discover = discoverArr[random]
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    discover +
                    "&key=AIzaSyAXjFWjjyWZ2ZiJawBg0oglhwGrq1JDX8o+&maxResults=40"
            )
            .then((res) => setData(res.data.items))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="cover">
                <nav>
                  <a href="/">
                  <div className="logo">
                        <img src="logo.svg" alt="logo" width="120px" />
                        <h3>Book Keeper</h3>
                    </div>
                  </a>
                    
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search 13 million titles"
                            className="input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyUp={searchBook}
                        />
                        <button type="submit" className="search">
                            <ImSearch />
                        </button>
                    </form>
                </nav>
                <div className="quote">
                    "Today a reader, tomorrow a leader." - Margaret Fuller
                </div>
            </div>
            <div className="container">
                <Book data={data} />
            </div>
        </>
    );
}

export default App;
