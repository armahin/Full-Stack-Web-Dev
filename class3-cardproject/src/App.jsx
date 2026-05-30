import React from 'react'
import Cards from './components/Cards.jsx'
const App = () => {
const users = [
  {
    fullName: "Arian Mahin",
    title: "Frontend Developer",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    likesCount: 1250,
    postCount: 48,
    viewsCount: 15400,
    followed: true,
  },
  {
    fullName: "Nusrat Jahan",
    title: "UI/UX Designer",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    likesCount: 980,
    postCount: 35,
    viewsCount: 11200,
    followed: false,
  },
  {
    fullName: "Tanvir Hasan",
    title: "Data Scientist",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    likesCount: 2150,
    postCount: 62,
    viewsCount: 28400,
    followed: true,
  },
  {
    fullName: "Sadia Akter",
    title: "Content Creator",
    profileImage: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    likesCount: 1730,
    postCount: 54,
    viewsCount: 19800,
    followed: false,
  },
  {
    fullName: "Karim Ahmed",
    title: "Mobile Developer",
    profileImage: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    likesCount: 1320,
    postCount: 39,
    viewsCount: 14300,
    followed: false,
  },
  {
    fullName: "Jannat Islam",
    title: "Digital Marketer",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    likesCount: 1890,
    postCount: 57,
    viewsCount: 22100,
    followed: true,
  }
];
  return (
    <div className='flex justify-center items-center flex-wrap'>
      {
        users.map((elem)=>{
          return <Cards fullName={elem.fullName} title={elem.title} profileImage={elem.profileImage} coverImage={elem.coverImage} likesCount={elem.likesCount} postCount={elem.postCount} viewsCount = {elem.viewsCount} followed={elem.followed} />
        })
      }
    </div>
  )
}

export default App