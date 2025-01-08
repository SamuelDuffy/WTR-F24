import './Mutli.css'

export interface MultiItemProps {
    title: string;
    content: string;
} 

const MuliItem = (props: MultiItemProps) => {
  return (
    <div className='MultiItem'>
        <h4>
            {props.title}
        </h4>
        <hr></hr>
        <p>
            {props.content}
        </p>
    </div>
  )
}

export default MuliItem
