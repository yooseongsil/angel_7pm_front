import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

extend('tel', {
  message () {
    return '올바른 핸드폰 번호를 입력해주세요'
  },
  validate (value) {
    value = value.split('-').join('')
    const regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/
    return regPhone.test(value)
  }
})
extend('email', {
  message () {
    return '올바른 이메일 주소를 입력해주세요'
  }
})
extend('jr_naver_email', {
  message () {
    return '주니어네이버 메일은 사용할 수 없습니다.'
  },
  validate (value) {
    return value !== '' && value.split('@')[1] !== 'jr.naver.com'
  }
})
extend('alpha', {
  message (fieldName) {
    return `'${fieldName}' 항목에는 영문자만 사용 가능합니다`
  }
})
extend('alpha_dash', {
  message (fieldName) {
    return `'${fieldName}' 항목에는 영문자, 숫자와 특수기호(-),(_)만 사용 가능합니다`
  }
})
extend('alpha_num', {
  message (fieldName) {
    return `'${fieldName}' 항목에는 영문자와 숫자만 사용 가능합니다`
  }
})
extend('alpha_spaces', {
  message (fieldName) {
    return `'${fieldName}' 항목에는 영문자와 공백만 사용 가능합니다`
  }
})
extend('between', {
  message (fieldName, { min, max }) {
    return `'${fieldName}' 항목의 값은 ${min}에서 ${max} 사이여야 합니다`
  }
})
extend('confirmed', {
  message (fieldName) {
    return `'${fieldName}' 항목의 값이 일치하지 않습니다`
  }
})
extend('digits', {
  message (fieldName, { length }) {
    return `'${fieldName}' 항목의 값은 ${length}자리의 숫자이어야 합니다`
  }
})
extend('dimensions', {
  message (fieldName, { width, height }) {
    return `'${fieldName}' 항목의 크기는 가로 ${width}픽셀, 세로 ${height}픽셀이어야 합니다`
  }
})
extend('excluded', {
  message (fieldName) {
    return `'${fieldName}' 항목은 유효한 값이어야 합니다`
  }
})
extend('ext', {
  message (fieldName) {
    return `'${fieldName}' 항목은 유효한 파일이어야 합니다`
  }
})
extend('image', {
  message (fieldName) {
    return `'${fieldName}' 항목은 이미지 파일이어야 합니다`
  }
})
extend('integer', {
  message (fieldName) {
    return `'${fieldName}' 항목의 값은 정수이어야 합니다`
  }
})
extend('length', {
  message (fieldName, { length }) {
    return `'${fieldName}' 항목의 값은 ${length}자이어야 합니다`
  }
})
extend('max_value', {
  message (fieldName, { max }) {
    return `'${fieldName}' 항목의 값은 ${max} 이하이어야 합니다`
  }
})
extend('max', {
  message (fieldName, { length }) {
    return `'${fieldName}' 항목의 값은 최대 ${length}글자이어야 합니다`
  }
})
extend('mimes', {
  message (fieldName) {
    return `'${fieldName}' 항목은 유효한 파일 형식의 파일이어야 합니다`
  }
})
extend('min_value', {
  message (fieldName, { min }) {
    return `'${fieldName}' 항목의 값은 ${min} 이상이어야 합니다`
  }
})
extend('min', {
  message (fieldName, { length }) {
    return `'${fieldName}' 항목의 값은 최소 ${length}글자이어야 합니다`
  }
})
extend('numeric', {
  message (fieldName) {
    return `'${fieldName}' 항목에는 숫자만 사용 가능합니다`
  }
})
extend('oneOf', {
  message (fieldName) {
    return `'${fieldName}' 항목의 값은 유효한 값이어야 합니다`
  }
})
extend('regex', {
  message (fieldName) {
    return `'${fieldName}' 항목은 형식에 맞지 않습니다`
  }
})
extend('required', {
  message (fieldName) {
    let result = ''
    if (fieldName === '{field}') {
      result = '내용을 입력해주세요.'
    } else {
      result = `'${fieldName}' 항목은 필수 정보입니다`
    }
    return result
  }
})
extend('required_if', {
  message (fieldName) {
    return `'${fieldName}' 항목은 필수 정보입니다`
  }
})
extend('size', {
  message (fieldName, { size }) {
    return `'${fieldName}' 항목의 크기는 ${size}KB보다 작아야 합니다`
  }
})
