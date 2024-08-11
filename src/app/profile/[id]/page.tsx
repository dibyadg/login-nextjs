
export default function UserProfile({params}:any){   
  

  return (
   <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen">
    <h1>Profile</h1>
    <hr />
    <p>User Profile 
      <span className="bg-amber-800 text-white p-2 rounded m-2">{params.id}</span>
    </p>
   </div>
  )

}
