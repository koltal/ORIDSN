import styled from 'styled-components'
import BackgroundDisplay from "../components/background-display";
import useFetch from '../Networks/useFetch';

const ChapterTable = styled.table`
    width: 80%;
    margin: 0 auto;
    // background-color: green;
    // color: white;
    margin-top:50px;
    padding: 40px;
    th{
        text-align:left;
    }
    tr, td{
        text-align: left;
        padding: 5px;
    }

`

const Chapters = () => {
    const{data: isChapter, isLoading} = useFetch('https://oridsan.fly.dev/api/v1/admin/chapters');
    return ( 
       

        <div>
            <BackgroundDisplay title='Chapters'/>
        <ChapterTable>
        <thead>
                <th>Chapter Name</th>
                <th>Address</th>
                <th>Contact</th>
            </thead>
            {isChapter && isChapter.map((chapter)=>{
                return(
                    <>
                    
            <tbody>
                <tr>
                    <td>{chapter.chapterName}</td>
                    <td>{chapter.address}</td>
                    <td>{chapter.contact}</td>
                </tr>
            </tbody>
            </>
                )
            })
            }
        </ChapterTable>
            {isLoading && <div>Data is Loading......</div>}
        </div>
     );
}
 
export default Chapters;