// MARK: - Constants
struct Constants {

    static let API_KEY = "7fa8b2516d60c58b0e4ca0811175c0ac"
    static let METHOD_NAME = "flickr.photos.search"
    static let NUMBER_RETURNED_ITEMS = 150
    static let FORMAT = "json"
    static let NO_JSON_CALLBACK = 1
    static let SAFE_SEARCH = 1
    static let SORT = "interestingness-desc"
    
    static let BING_BASE_URL : String = "http://api.bing.com/osjson.aspx"
    static let FLICKR_BASE_URL: String = "https://api.flickr.com/services/rest/"
    
    static let THUMBNAIL_PHOTO_SIZE = "q"
    static let NORMAL_PHOTO_SIZE = "b"
    
}

// MARK: - Parameter Keys
struct ParameterKeys {
    
    static let METHOD = "method"
    static let API_KEY = "api_key"
    static let TEXT = "text"
    static let PER_PAGE = "per_page"
    static let FORMAT = "format"
    static let NO_JSON_CALLBACK = "nojsoncallback"
    static let QUERY = "query"
    static let SAFE_SEARCH = "safe_search"
    static let PAGE = "page"
    static let SORT = "sort"
}

Suggest QUERY
http://api.bing.com/osjson.aspx?query=Boston+Harbor
	
Request for a list of photos

let parameters = [
            ParameterKeys.METHOD: Constants.METHOD_NAME,
            ParameterKeys.API_KEY: Constants.API_KEY,
            ParameterKeys.TEXT: searchString,
            ParameterKeys.PER_PAGE: Constants.NUMBER_RETURNED_ITEMS,
            ParameterKeys.FORMAT: Constants.FORMAT,
            ParameterKeys.NO_JSON_CALLBACK: Constants.NO_JSON_CALLBACK,
            ParameterKeys.SORT: Constants.SORT
        ]
        
https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fa8b2516d60c58b0e4ca0811175c0ac&text=Boston&per_page=2&format=json&nojsoncallback=1&sort=interestingness-desc
https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fa8b2516d60c58b0e4ca0811175c0ac&text=Boston+Harbor&per_page=2&format=json&nojsoncallback=1&sort=interestingness-desc

{
	"photos": {
		"page": 1,
		"pages": 228830,
		"perpage": 2,
		"total": 2288295,
		"photo": [
			{
				"id": "24463560396",
				"owner": "114040187@N08",
				"secret": "795b016b7e",
				"server": "1665",
				"farm": 2,
				"title": "Boston Blues",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			},
			{
				"id": "27953876323",
				"owner": "124304575@N06",
				"secret": "1d67a2898b",
				"server": "8785",
				"farm": 9,
				"title": "Boston skyline",
				"ispublic": 1,
				"isfriend": 0,
				"isfamily": 0
			}
		]
	},
	"stat": "ok"
}


Request for a normal photo
{
"id": "27953876323",
"owner": "124304575@N06",
"secret": "1d67a2898b",
"server": "8785",
"farm": 9,
"title": "Boston skyline",
"ispublic": 1,
"isfriend": 0,
"isfamily": 0
}

Request for a normal photo
http://farm9.static.flickr.com/8785/27953876323_1d67a2898b_b.jpg

Request for a thumbnail photo
http://farm9.static.flickr.com/8785/27953876323_1d67a2898b_q.jpg

AppGyver:
"http://farm" + repeated.current.farm + ".static.flickr.com/" + repeated.current.server + "/" + repeated.current.id + "_" + repeated.current.secret + "_q.jpg"

