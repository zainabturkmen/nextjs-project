const SingleDrinksPage = async ({ params }) => {
    const {id} = await params
    console.log(id);
    
  return <div>SingleDrinksPage</div>;
};

export default SingleDrinksPage;
