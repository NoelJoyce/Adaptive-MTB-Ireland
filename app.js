window.addEventListener('load',function() {
    console.log('page is loaded');

    fetch ('trails.json')
    .then(response => response.json())
    .then (data => {
        
        let title = document.getElementById("heading");

        title.innerHTML = data.Description;

        let trails = document.getElementById('trails');

        let trailsinfo = data.Trails;

        //console.log (trails);

        for(let i=0;i<trailsinfo.length;i++) {

            //console.log(trailsinfo[i].Name);
            //console.log(trailsinfo[i].Location);

            let name = document.createElement('p');
            name.innerHTML = trailsinfo[i].Name

            let place = document.createElement('p');
            place.innerHTML = trailsinfo[i].Location

            let ease =document.createElement('p');
            ease.innerHTML = trailsinfo[i].Difficulty

            trails.appendChild(place);
            trails.appendChild(name);
            trails.appendChild(ease);
         
        }

    })
    .catch(error => {console.log("Error!!! : " + error);
})
})