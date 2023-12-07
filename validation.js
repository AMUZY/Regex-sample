// validation script here
const allInputs = Array.from(document.querySelectorAll('input'))
const allPs = Array.from(document.querySelectorAll('p'))

const patterns = {
    username : ['username',/^\w{5,12}$/],
    email : ['email',/^\w+@[a-z]{2,8}\.[a-z]{2,8}$/],
    password : ['password',/^[\w@-]{8,20}$/],
    telephone : ['telephone',/^\d{11}$/],
    slug : ['slug',/^[a-z\d-]{8,20}$/],
}

const showHideP = (index,status,disp)=>{
    allPs.map((p,pIndex)=>{
        if(index === pIndex){
            if(disp){
                p.style.display='none'
            }else{
                p.style.display='block'
                if(status === true){
                    p.style.color='green'
                }else{
                    p.style.color='red'
                }
            }
        }
    })
}
const CheckStatus = (name,value)=>{
    let status = false
    Object.values(patterns).forEach((pattern)=>{
        if(name === pattern[0]){
            status = pattern[1].test(value)
        }
    })
    return status
}

const Validate = (elem,e,index)=>{
    if(e.target.value.length > 0){
        if(CheckStatus(e.target.name,e.target.value)){
            elem.style.borderColor='green'
            showHideP(index,true,false)
        }else{
            elem.style.borderColor='red'
            showHideP(index,false,false)
        }
    }else{
        elem.style.borderColor=''
        showHideP(index,true,true)
    }
}

allInputs.map((element,index)=>{
    element.addEventListener('keyup',(e)=>
        Validate(element,e,index)
    )
    element.addEventListener('change',(e)=>
        Validate(element,e,index)
    )
})
