

interface Btn{
name: string;
color:string;
}

export default function Button({name, color}:Btn) {
  return (
    <div>
     <button type="submit" className='btn' style={{background:color }} >{name}</button> 
    </div>
  )
}
