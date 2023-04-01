import styles from "./task3103.module.scss"
import data from "../../test3104_fake_data.json"
import { useEffect, useState } from "react";

const Task3103 = () => {
    const [articles, setArticles] = useState([]);
    const [article_highlight, setArticle_highlight] = useState([])
    useEffect(() => {
        // fetch data from server 
        const article_highlight = data.filter((data) => {
            return data.status === "highlight"
        })
        const articles_rest = data.filter((data => {
            return data.status !== "highlight"
        }))
        setArticle_highlight(article_highlight[0])
        setArticles(articles_rest)
    }, []);

    return (           
        <div className={styles["articles_main"]}> 
            {article_highlight && <div className={styles["article_highlight"]}>
                <div className={styles["article_highlight_banner"]} 
                     style={{backgroundImage: `url("${article_highlight.banner}")`}}>
                    {console.log(article_highlight.banner)}
                </div>  

                <div className={styles["article_highlight_ctn"]}>
                    <div className={styles["article_highlight_date"]}> {article_highlight.date} </div>
                    <h1 className={`${styles.article_title} ${styles.article_highlight_title}`}> {article_highlight.title} </h1>
                    <div className={styles["article_highlight_content"]}>{article_highlight.content}</div>
                    <a className={`${styles.readmore_button} readmore_button`} href="localhost"> Xem tiếp...</a>
                </div>
            </div>}
            
            {articles && <div className={styles["articles_rest"]}>
                {articles.map((article, i) => (
                    <div className={styles["article_container"]} key={i}>
                        <div className={styles["article_banner"]} 
                            style={{backgroundImage: `url("${article.banner}")`}}>
                        </div>
                        <div className={styles["article_date"]}>
                            {article.date}
                        </div>

                        <div className={styles.title_content_ctn}>
                                
                            <h1 className={styles["article_title"]}>
                                {article.title} 
                            </h1>

                            <p className={styles["article_content"]}>
                                {article.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Task3103