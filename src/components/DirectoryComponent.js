import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: [ {
                id: 0,
                name: 'React Lake Campground',
                image: 'assets/images/react-lake.jpg',
                elevation: 1233,
                description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
            },
            {
              id: 1,
              name: 'Chrome River Campground ',
              image: 'assets/images/chrome-river.jpg',
              elevation: 877,
              description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
            },
            {
                id: 2,
                name: 'Breadcrumb Trail Campground',
                image: 'assets/images/breadcrumb-trail.jpg',
                elevation: 2901,
                description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
            },
            {
                id: 3,
                name: 'Redux Woods Campground',
                image: 'assets/images/redux-woods.jpg',
                elevation: 42,
                description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
            }

            ],
        };
    }

    
    /* To pull the data for each campsite, using map, from the array added to the state. Then it will go through 
    each to format its name and description and render them all */

    render() {
        const directory = this.state.campsites.map(campsite => {
            return (  //this returnn is for arrow function
                <div key = {campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <ExampleParentComponent />  */}
            </div>
        );
    }
}


/* To pass estate data
class ExampleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 333
        }
    }
    render() {
        return <ExampleChildComponent number={this.state.number} greeting="Hello World" />;
    }
}
class ExampleChildComponent extends Component {
    render() {
        return <div>{this.props.number} {this.props.greeting} </div>
    };
}
*/

export default Directory;