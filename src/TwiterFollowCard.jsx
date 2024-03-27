export function TwiterFollowCard({userName,name,isFollowed=false}) {
    const imagenSrc=`https://unavatar.io/${userName}`
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
     <img alt="imagen avatar" src={imagenSrc}/> 
     <div className='tw-followCard-datos'>
         <strong>{name}</strong>
         <span className='tw-followCard-infoUser'>@{userName}</span>
     </div>
     </header>
     <aside>
         <button className="tw-followCard-button">Segir</button>
     </aside>
 </article> 
  )
}