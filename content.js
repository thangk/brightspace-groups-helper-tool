
(() => {

    const checkBoxes = document.querySelectorAll('.d2l-table.d2l-grid.d_gd.d2l-fitted-table input[type="checkbox"]')

    function createNewOption(value, text) {
        const option = document.createElement('option')
        option.value = value
        option.text = text
        return option
    }

    // not working yet
    function addNewPerPageValues() {
        const perPageSelector = document.querySelector('select[title="Results Per Page"]')

        const perPage_5 = createNewOption(5, '5 per page')
        const perPage_300 = createNewOption(300, '300 per page')
        const perPage_400 = createNewOption(400, '400 per page')

        perPageSelector.prepend(perPage_5)
        perPageSelector.append(perPage_300)
        perPageSelector.append(perPage_400)

        console.log(perPageSelector)
    }
    addNewPerPageValues()
   



    const theItem = document.querySelector('input[name="d2l_controlMap"')

    console.log(theItem.value)










    

    function performMultiCheck() {
        
        const getFirstRow = document.querySelectorAll('.d_hch.d_gc')

        for (let i = 1; i < getFirstRow.length; i++) {
            getFirstRow[i].appendChild(getNewBreak())
            getFirstRow[i].appendChild(getNewCheckbox(i))
        }
    }

    

    function handleCheckboxClick(index) {

        const { isIntermediate } = analyzeCheckboxes(index)

        if (isIntermediate) {
            for (let i = index-1; i < checkBoxes.length; i+=3) {
                if (!checkBoxes[i].checked) {
                    checkBoxes[i].click()
                }
            }
            return
        } 

        for (let i = index-1; i < checkBoxes.length; i+=3) {
            checkBoxes[i].click()
            console.log('current index', i)
        }
    }

    function analyzeCheckboxes(index) {

        let rowCount = 0
        let allCheckedCount = 0

        let isIntermediate = false
        let isAllChecked = false

        for (let i = index-1; i < checkBoxes.length; i+=3, rowCount++) {
            if (checkBoxes[i].checked) {
                allCheckedCount++
            }
        }

        if (allCheckedCount === rowCount) {
            isAllChecked = true
        }
        if (allCheckedCount !== rowCount) {
            isIntermediate = true
        }

        return { isIntermediate, isAllChecked }
    }


    function getNewCheckbox(index) {
        const { isAllChecked } = analyzeCheckboxes(index)

        const newCheckbox  = document.createElement('input')
        newCheckbox.setAttribute('type', 'checkbox')
        newCheckbox.setAttribute('class', 'd2l-checkbox')
        newCheckbox.onclick = () => handleCheckboxClick(index)
        newCheckbox.defaultChecked = isAllChecked
        newCheckbox.style.margin = '6px 6px'
        return newCheckbox
    }

    function getNewBreak() {
        return document.createElement('br')
    }


    console.log(checkBoxes)

    performMultiCheck()
})()