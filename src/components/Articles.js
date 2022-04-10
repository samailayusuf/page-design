import React from 'react'
import './Articles.css'

function Articles() {
  return (
    <div className="articles"> 
    <div className="articles-container">
        <div style={{color:'#1e3a8a'}}>
            <h4>LES</h4>
            <h2>ARTICLES</h2>
        </div>

        <div className="articles-list">
            <div className="article">
                <h4>Titre de l'article</h4>
                <p style={{marginBottom:'25px'}}>18 Mars 2021 ● Immobilier</p>
                <p className="text" style={{lineHeight:1, marginTop:'5px'}}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum 
                has been the industry's standard
                </p>
            </div>

            <div className="article">
                <h4>Titre de l'article</h4>
                <p style={{marginBottom:'25px'}}>18 Mars 2021 ● Immobilier</p>
                <p className="text" style={{lineHeight:1, marginTop:'5px'}}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum 
                has been the industry's standard
                </p>
            </div>

            <div className="article">
                <h4>Titre de l'article</h4>
                <p style={{marginBottom:'25px'}}>18 Mars 2021 ● Immobilier</p>
                <p className="text" style={{lineHeight:1, marginTop:'5px'}}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum 
                has been the industry's standard
                </p>
            </div>

            <div className="article">
                <h4>Titre de l'article</h4>
                <p style={{marginBottom:'25px'}}>18 Mars 2021 ● Immobilier</p>
                <p className="text" style={{lineHeight:1, marginTop:'5px'}}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum 
                has been the industry's standard
                </p>
            </div>
            
        </div>
    </div>
        
</div>
  )
}

export default Articles