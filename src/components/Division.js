import PD from "../asset/IconPD.jpeg";
import VD from "../asset/IconVD.jpeg";
import IT from "../asset/IconIT.PNG";
import CC from "../asset/IconCC.PNG";
import DC from "../asset/IconDC.PNG";
import DM from "../asset/IconDM.PNG";

import bahtiar from "../asset/bahtiar.jpeg";
import gilang from "../asset/gilang.jpeg";
import iki from "../asset/iki.jpg";
import sila from "../asset/sila.PNG";
import najwa from "../asset/najwa.PNG";
import henry from "../asset/henry.PNG";

import "./Division.css";
import Division2 from "./Division2";

const Division =() =>{
    return(
        <div className="division">
            <h1>Division</h1>
            <p>Desaineriam & Co</p>

            <Division2
            className="first-description"
            heading="PRESIDENT DIRECTOR"
            text="bertanggung jawab secara penuh diamnco,
            membangun visi, misi, tujuan, serta program kerja diamnco,
            bertanggung jawab untuk memberikan arah perkembangan tujuan jangka pendek dan panjang, kebijakan, anggaran dan rencana operasional perusahaan dan mengawasi interpretasi yang konsisten dan penerapannya, serta rencana pencapaiannya,
            membangun tim sesuai rencana dan arah agency."

            img1={PD}
            img2={gilang}
            />

            <Division2
            className="first-description-reverse"
            heading="VICE PRESIDENT"
            text="membantu dalam pengambilan keputusan diamnco,
            membantu dan mengembangkan tim sesuai visi, misi, tujuan, serta arah agency yang telah di setujuin president director,
            bertanggung jawab atas operasional tim dan produksi terutama dibidang media entertainment,
            meningkatkan efisiensi dan produktivitas tim,
            menganalisa arah media entertainment agency."

            img1={VD}
            img2={bahtiar}
            />

            <Division2
            className="first-description"
            heading="INFOMATION TECHNOLOGY"
            text="membangun sistem IT diamnco,
            mengerjakan setiap project IT,
            membangun portofolio IT,
            membangun branding diamnco. "

            img1={IT}
            img2={iki}
            />

            <Division2
            className="first-description-reverse"
            heading="CONTECNT CREATOR"
            text="memproduksi konten yang akan dipasarkan,
            menganalisa target pasar,
            membangun branding,
            menyusun strategi konten diamnco dan konsumen."

            img1={CC}
            img2={henry}
            />
            
            <Division2
            className="first-description"
            heading="CREATIVE"
            text="menganalisa produk dan jasa apa yang perlu dihasilkan oleh diamnco,
            menentukan konsep produk dan jasa yang dihasilkan,
            menentukan script acara,
            mengerjakan project design graphic,"

            img1={DC}
            img2={sila}
            />

            <Division2
            className = "first-description-reverse"
            heading = "DIGITAL MARKETING"
            text ="membangun kemitraan dengan pihak luar,
            menjaring konsumen potensial,
            membangun branding diamnco,
            meriset pasar sesuai target diamnco."
            
            img1={DM}
            img2={najwa}
            />
            {/* <div className="first-description">
                <div className="description-text">
                    <h2>PRESIDENT DIRECTOR</h2>
                    <p>-bertanggung jawab secara penuh diamnco
                        -membangun visi, misi, tujuan, serta program kerja diamnco
                        -bertanggung jawab untuk memberikan arah perkembangan tujuan jangka pendek dan panjang, kebijakan, anggaran dan rencana operasional perusahaan dan mengawasi interpretasi yang konsisten dan penerapannya, serta rencana pencapaiannya.
                        -membangun tim sesuai rencana dan arah agency
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={PD} />
                    <img alt="img" src={PD}/>
                </div>
            </div> */}
        </div>
    )
}

export default Division;