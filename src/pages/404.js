import React from "react";
import Four0Four from '../components/404/index'
import { fourfour } from '../components/404/404Data.js'
//import Layout from "../components/layout";
import Seo from "../components/SEO/seo";
import '../components/LayoutForWeb/layout.css';

const NotFoundPage = () => {
  
  return (
    <>
      <Seo title="404: Not found" />
      <Four0Four {...fourfour}/>
    </>
  );
}

export default NotFoundPage;


