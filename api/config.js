const { handleCors, publicConfig, sendError, sendJson } = require('./_supabase');

module.exports = async function handler(req, res) {
    try {
        if (!handleCors(req, res, ['GET'])) return;
        if (req.method !== 'GET') {
            res.setHeader('Allow', 'GET, OPTIONS');
            return sendJson(res, 405, { error: 'Metoda niedozwolona.', code: 'method_not_allowed' });
        }

        return sendJson(res, 200, publicConfig());
    } catch (error) {
        return sendError(res, error);
    }
};
