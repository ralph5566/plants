export function isNotEmpty(value) {
    return value.trim() !== ''
}

export function hasMinLength(value, minLength) {
    return value.length < minLength
}

export function isEquals(value, otherValue) {
    return value === otherValue
}
