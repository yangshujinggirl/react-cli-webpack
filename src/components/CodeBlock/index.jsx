import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import  styles from './index.less';

const CodeBlock=({title, code,language})=>{
  return <div className={styles["codeBlock-wrap"]}>
          <div className={styles["code-title"]}>{title}</div>
          <Highlight {...defaultProps}  theme={theme} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
}
export default CodeBlock;