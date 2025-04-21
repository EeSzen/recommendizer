// import ProductCard from "../components/ProductCard";

// const fakeFunction = [
//     { id: 1, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
//     { id: 2, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
//     { id: 3, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
//     { id: 4, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
//     { id: 5, name: "Wireless Headphones", category: "Electronics", rating: 4, image: "/assets/headphones.jpg" },
//     { id: 6, name: "Yoga Mat", category: "Fitness", rating: 5, image: "/assets/yogamat.jpg" },
//   ];

const Function = () => (
  <div className="container my-5">
    <h2 className="mb-4">NEW RECOMMENDATIONS</h2>
    <form>
        <div class="mb-3">
            <label for="UserID" class="form-label">UserID</label>
            <input type="text" class="form-control" id="UserID" aria-describedby="UserID"/>
            <div id="UserID" class="form-text">Please input your UserID</div>
        </div>
        <div class="mb-3">
            <label for="ProductID" class="form-label">ProductID</label>
            <input type="productID" class="form-control" id="ProductID"/>
        </div>
        {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default Function;
