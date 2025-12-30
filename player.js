import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const audio = document.getElementById("audio");
const list = document.getElementById("songList");

async function loadSongs(){
  const snap = await getDocs(collection(db,"songs"));
  snap.forEach(doc=>{
    const d = doc.data();
    const btn = document.createElement("button");
    btn.innerText = d.title;
    btn.onclick = ()=>{
      audio.src = d.audio;
      localStorage.setItem("lyrics", d.lyrics);
      location.href = "lyrics.html";
    };
    list.appendChild(btn);
  });
}
loadSongs();
