import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Button from './components/Button.jsx'
import PaginatedGrid from './components/PaginatedGrid.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const departments = ['Engineering', 'Research', 'Product', 'Operations']
  const locations = ['New York', 'London', 'Toronto', 'Sydney']
  const teams = ['Platform', 'Analytics', 'Web', 'Infrastructure']
  const rows = [
    { id: 1, name: 'Ada Lovelace', role: 'Engineer' },
    { id: 2, name: 'Grace Hopper', role: 'Computer scientist' },
    { id: 3, name: 'Katherine Johnson', role: 'Mathematician' },
    { id: 4, name: 'Alan Turing', role: 'Computer scientist' },
    { id: 5, name: 'Dorothy Vaughan', role: 'Mathematician' },
    { id: 6, name: 'Tim Berners-Lee', role: 'Web developer' },
    { id: 7, name: 'Margaret Hamilton', role: 'Software engineer' },
    { id: 8, name: 'Dennis Ritchie', role: 'Computer scientist' },
    { id: 9, name: 'Radia Perlman', role: 'Network engineer' },
    { id: 10, name: 'Linus Torvalds', role: 'Software engineer' },
    { id: 11, name: 'Hedy Lamarr', role: 'Inventor' },
    { id: 12, name: 'Edsger Dijkstra', role: 'Computer scientist' },
  ].map((row, index) => ({
    ...row,
    email: `employee${row.id}@example.com`,
    department: departments[index % departments.length],
    location: locations[index % locations.length],
    startDate: `202${index % 6}-0${(index % 9) + 1}-15`,
    status: index % 4 === 0 ? 'On leave' : 'Active',
    experienceYears: index + 2,
    projectsCompleted: (index + 1) * 2,
    team: teams[index % teams.length],
    employmentType: index % 3 === 0 ? 'Part-time' : 'Full-time',
    rating: 3 + (index % 3) * 0.5,
  }))
  const columns = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'email', title: 'Email' },
    { field: 'department', title: 'Department' },
    { field: 'location', title: 'Location' },
    { field: 'startDate', title: 'Start date' },
    { field: 'status', title: 'Status' },
    { field: 'experienceYears', title: 'Years of experience' },
    { field: 'projectsCompleted', title: 'Projects completed' },
    { field: 'team', title: 'Team' },
    { field: 'employmentType', title: 'Employment type' },
    { field: 'rating', title: 'Rating' },
  ]

  return (
    <>
      <h1>counter {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment+</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement-</Button>
      <PaginatedGrid data={rows} columns={columns} pageSize={5} />
    </>
  )
}

export default App
