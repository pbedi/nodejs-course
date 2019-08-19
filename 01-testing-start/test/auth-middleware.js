const expect = require('chai').expect;
const jwt =  require('jsonwebtoken');
const sinon = require('sinon');

const authMiddleware = require('../middleware/is-auth');

describe('Auth Middleware', () => {
    it('should throw an error when no authorisation header is present', () => {
        const req = {
            get: function () {
                return null;
            }
        };
        expect(authMiddleware.bind(this, req, {}, () => {})).to.throw('Not authenticated.');
    });
    
    it('should throw an error when no authorisation header has only part string', () => {
        const req = {
            get: function () {
                return 'xyz';
            }
        };
        expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
    });

    it('should yield a userId after decoding the token', () => {
        const req = {
            get: function (headerName) {
                return 'Bearer xyz';
            }
        };
        sinon.stub(jwt, 'verify');

        jwt.verify.returns( {userId: 'abc'});
        authMiddleware( req, {}, () => {});
        expect(req).to.have.property('userId');
        expect(req).to.have.property('userId', 'abc');
        expect(jwt.verify.called).to.be.true;
        jwt.verify.restore();
    });

    it('should throw an error if token cannot be verified', () => {
        const req = {
            get: () => {
                return 'Bearer xyz';
            }
        };
        expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
    });
});
