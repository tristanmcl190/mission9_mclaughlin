import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Mission9JSON.json';

interface interfaceTeam {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div>
      <h1>March Madness Basketball Teams</h1>
      <h3>
        This is a list of all schools in the NCAA March Madness, their mascot,
        and their location.
      </h3>
    </div>
  );
}

function TeamCard({ team }: { team: interfaceTeam }) {
  return (
    <div className="card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}

function TeamList({ teams }: { teams: interfaceTeam[] }) {
  return (
    <div className="card-container">
      {teams.map((team, i) => (
        <TeamCard key={i} team={team} />
      ))}
    </div>
  );
}

function App() {
  // Cast the imported data to an array of the correct type (interfaceTeam[])
  const teams: interfaceTeam[] = (data as { teams: interfaceTeam[] }).teams;

  return (
    <div className="App">
      <Welcome />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
