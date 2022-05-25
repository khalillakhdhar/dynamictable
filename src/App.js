import  React  from 'react';

class App extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
        this.state={
             noms : ["Khalil "],
             nm:'',
             
        }
this.add=this.add.bind(this);
this.onChange=this.onChange.bind(this);

    }
    onChange = e => { // arrow function
        this.setState({ [e.target.name]: e.target.value });
        };
        add(event)
        {
            let ls=this.state.noms;
            ls.push(this.state.nm);
            console.log("liste",ls);
            this.setState({noms:ls});
            this.setState({nm:''});
            //this.setState({noms:this.state.noms.push(this.state.nm)})
            event.preventDefault();

        }
   
    render()
    {
        return(
            <><div>
              <form onSubmit={this.add}>
              <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Nom</label>
  <input type="text" name="nm" value={this.state.nm} onChange={this.onChange} className="form-control"  placeholder="Votre nom ici" />
  <input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
</div>

              </form>
                <ul>{this.state.noms.map((nom) => <li>{nom}</li>)}</ul>
            </div>

<div>
                
                
                
                </div></>
        );
    }
}
export default App;
