
const expect = require('chai').expect;

const objValues = require('../index');

const obj = {a: 1, b: 2, c: 'three'};


describe('#objValues', function() {
	it('should return an array', function() {
		const result = objValues(obj);
		expect(result).to.be.an('array');
	});

	it('expect result to be ok', function() {
		const result = objValues(obj);
		expect(result).to.be.ok;
	});

	it('expect result to be ok', function() {
		const result = objValues(obj);
		expect(result).to.have.length.of.at.least(3);
	});

	it('should return the appropriate members', function() {
		const result = objValues(obj);
		expect(result).to.have.members([1, 2, 'three']);
	});

	it('last property should be a three', function() {
		const result = objValues(obj);
		expect(result).to.have.property([2], 'three');
	});

	it('last property should be a three, a string', function() {
		const result = objValues(obj);
		expect(result).to.have.property([2], 'three')
			.that.is.a('string');
	});

	it('should return the appropriate members in reverse order', function() {
		const result = objValues(obj, {reverse: true});
		expect(result).to.have.members(['three', 2, 1]);
	});



});