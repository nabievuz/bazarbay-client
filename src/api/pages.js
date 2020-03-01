export default class Pages {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/pages';
	}

	list(filter) {
		return this.client.get(this.resourceUrl, filter);
	}

	retrieve(id) {
		return this.client.get(`${this.resourceUrl}/${id}`);
	}

	create(data) {
		return this.client.post(this.resourceUrl, data);
	}

	update(id, data) {
		return this.client.put(`${this.resourceUrl}/${id}`, data);
	}

	delete(id) {
		return this.client.delete(`${this.resourceUrl}/${id}`);
	}
}
