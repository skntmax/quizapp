
import React, { useContext, useState } from 'react';
import { MdEditor ,MdCatalog ,MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

function MdEditorCmp({disc}) {
  return (

     <MdPreview 
      tabWidth={0}
      codeFoldable={false}
      theme={"light"}
       language='en-US'
       codeTheme=''
        editorId={"preview-only"} 
        previewTheme="github"
        modelValue={disc} />
  )
}

export default MdEditorCmp