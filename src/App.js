import './App.css';
import Header from './components/header';
import { Route, Switch } from 'react-router';
import BrandsList from './components/brands_list'
import Enter from './components/enter';
import BrandsItem from './components/brands_list/brands_item';
import ItemsList from './components/items_list';
import WorkerList from './components/worker_list'
import WorkerItem from './components/worker_list/worker_item';

function App() {
  return (
    <div className='app__position'>
      <div>
        <Header/>
      </div>
      <Switch>
        <Route exact path='/' component={Enter}/>
        <Route exact path='/brands_list' component={BrandsList}/>
        <Route path={`/brands_item_id=${1}`} component={BrandsItem}/>
        <Route path={`/brands_item_id=${1}/items_list`} component={ItemsList}/>
        <Route path={`/brands_item_id=${1}/worker_list`} component={WorkerList}/>
        <Route path={`/brands_item_id=${1}/worker_item_id=${1}`} component={WorkerItem}/>
      </Switch>
    </div>
  );
}

export default App;
