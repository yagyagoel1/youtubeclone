import { SearchBar } from "./SearchBar"
export const AppBar = (props : any) =>{
    return <div className="flex justify-between pt-1 p-3">
       <div className ="text-md inline-flex items-center pb-2">youtube</div>
       <div> 
        <SearchBar>

        </SearchBar>
       </div>
       <div>Sign IN</div>
    </div>
}