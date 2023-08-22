

export default function CatCard({number, email, name}){
    return (
        <section> 
            <p>{name}</p>
            <p>{number}</p>
            <p>{email}</p>
        </section>
    )
}